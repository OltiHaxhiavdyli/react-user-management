import { User } from "../types/user";
import { useNavigate } from "react-router-dom";

interface Props {
  users: User[];
  onDelete: (id: number) => void;
  onEdit?: (user: User) => void;
}

export default function UserTable({ users, onDelete, onEdit }: Props) {
  const navigate = useNavigate();

  return (
    <table className="table table-bordered table-hover mt-3">
      <thead className="table-light">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/users/${u.id}`)}
            >
              {u.name}
            </td>
            <td>{u.email}</td>
            <td>{u.company.name}</td>
            <td>
              {onEdit && (
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => onEdit(u)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(u.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}