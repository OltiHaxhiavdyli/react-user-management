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

## Getting Started

Follow these steps to run the project locally:

## Getting Started

Follow these steps to download and run the project on your machine.

---

### 1. Clone the repository

bash
git clone https://github.com/OltiHaxhiavdyli/react-user-management.git
cd react-user-management

Download and install Node.js v18+ (includes npm) from https://nodejs.org/

### 2 Install Node.js

Verify the installation:

node -v
npm -v

### 3. Install dependencies

Run the following commands in the project directory:

npm install react react-dom

npm install typescript @types/react @types/react-dom --save-dev

npm install react-redux @reduxjs/toolkit

npm install react-router-dom @types/react-router-dom --save-dev

### 4. Start the development server

npm start
