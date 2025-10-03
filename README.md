# React User Management App

A small React TypeScript application for managing users.  
Demonstrates components, state, routing, forms, data fetching, and basic Redux state management.

## Features

1. **List Users**
   - Fetch from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
   - Display users in a table with name, email, and company
   - Store fetched data in Redux state

2. **Search**
   - Client-side search by name or email

3. **User Details Page**
   - Clicking a user navigates to a details page
   - Shows address, phone, website, and company

4. **Add a New User (Local Only)**
   - Form with validation (name and email required)
   - Insert the new user at the top of the list

5. **Update and Delete Users**
   - Edit user details from the details page
   - Delete users from the list

6. **Sorting**
   - Sort users alphabetically (A-Z / Z-A)

7. **Styling**
   - Styled with custom CSS for a clean layout

---

## Project Structure

my-typescript-app/
└── src/
├── components/
│ ├── UserCard.tsx
│ ├── UserTable.tsx
│ ├── SearchBar.tsx
│ └── UserForm.tsx
│
├── pages/
│ ├── UserListPage.tsx
│ └── UserDetailsPage.tsx
│
├── store/
│ ├── index.ts
│ └── userSlice.ts
│
├── types/
│ └── user.ts
│
├── App.tsx
├── index.tsx
├── index.css
└── react-app-env.d.ts

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>

Download and install [Node.js](https://nodejs.org/) v18+ (includes npm).

Verify installation:

```bash
node -v
npm -v

npm install react react-dom
npm install typescript @types/react @types/react-dom --save-dev
npm install react-redux @reduxjs/toolkit
npm install react-router-dom @types/react-router-dom --save-dev

npm start