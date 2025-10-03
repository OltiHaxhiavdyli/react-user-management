import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchUsers, addUser, deleteUser } from "../store/userSlice";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import UserForm from "../components/UserForm";

export default function UserListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((s: RootState) => s.users);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filtered = list
    .filter((u) =>
      [u.name.toLowerCase(), u.email.toLowerCase()].some((v) =>
        v.includes(search.toLowerCase())
      )
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="container mt-4 p-4 bg-white rounded shadow">
      <h1 className="mb-4">User Management</h1>

      <UserForm onAdd={(user) => dispatch(addUser(user))} />
      <SearchBar value={search} onChange={setSearch} />

      <button
        onClick={() => setSortAsc(!sortAsc)}
        className="btn btn-secondary mb-3"
      >
        Sort ({sortAsc ? "Z - A" : "A - Z"})
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserTable users={filtered} onDelete={(id) => dispatch(deleteUser(id))} />
      )}
    </div>
  );
}