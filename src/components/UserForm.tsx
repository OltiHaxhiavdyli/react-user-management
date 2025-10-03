import { useState } from "react";
import { User } from "../types/user";

interface Props {
  onAdd: (user: User) => void;
}

export default function UserForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert("Name and email are required!");

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      phone: "",
      website: "",
      company: { name: company },
      address: { street: "", suite: "", city: "", zipcode: "" },
    };

    onAdd(newUser);
    setName("");
    setEmail("");
    setCompany("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="form-control me-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="form-control me-2"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}