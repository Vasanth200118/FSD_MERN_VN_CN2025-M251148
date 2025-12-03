import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Task18() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 5;

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  const start = page * perPage;
  const end = start + perPage;
  const currentUsers = users.slice(start, end);

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Task 18 – Paginated Users</h3>
      <ul className="list-group mb-3">
        {currentUsers.map(u => (
          <li key={u.id} className="list-group-item">
            {u.firstName} {u.lastName} — {u.email}
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className="btn btn-secondary"
          disabled={end >= users.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
