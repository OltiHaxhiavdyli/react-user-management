import { User } from "../types/user";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Phone: {user.phone}</p>
        <p className="card-text">Website: {user.website}</p>
        <p className="card-text">
          Address: {user.address.street}, {user.address.city} {user.address.zipcode}
        </p>
        <p className="card-text">Company: {user.company.name}</p>
      </div>
    </div>
  );
}
