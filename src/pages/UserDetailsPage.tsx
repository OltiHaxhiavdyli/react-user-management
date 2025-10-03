import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import UserCard from "../components/UserCard";
import { updateUser } from "../store/userSlice";
import { useState, useEffect } from "react";

export default function UserDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((s: RootState) =>
    s.users.list.find((u) => u.id === Number(id))
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setCompany(user.company.name);
    }
  }, [user]);

  if (!user) return <p className="container mt-4">User not found</p>;

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert("Name and email are required!");

    dispatch(
      updateUser({
        ...user,
        name,
        email,
        company: { name: company },
      })
    );

    alert("User updated!");
    navigate("/"); // go back to list after update
  };

  return (
    <div className="container mt-4">
      <Link to="/" className="text-primary mb-3 d-inline-block">
        ← Back
      </Link>

      <UserCard user={user} />

      <h5 className="mt-4">Edit User</h5>
      <form onSubmit={handleUpdate} className="d-flex flex-column gap-2 mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button type="submit" className="btn btn-success mt-2">
          Update User
        </button>
      </form>
    </div>
  );
}