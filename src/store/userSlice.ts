import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";

// Fetch users from API
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await res.json()) as User[];
});

// Load initial users from localStorage
const storedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

interface UserState {
  list: User[];
  loading: boolean;
}

const initialState: UserState = {
  list: storedUsers,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.unshift(action.payload);
      localStorage.setItem("users", JSON.stringify(state.list));
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const idx = state.list.findIndex((u) => u.id === action.payload.id);
      if (idx > -1) state.list[idx] = action.payload;
      localStorage.setItem("users", JSON.stringify(state.list));
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.list));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // Merge API users with stored users, avoiding duplicates
        const existingIds = state.list.map((u) => u.id);
        const newUsers = action.payload.filter((u) => !existingIds.includes(u.id));
        state.list = [...state.list, ...newUsers];
        localStorage.setItem("users", JSON.stringify(state.list));
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;