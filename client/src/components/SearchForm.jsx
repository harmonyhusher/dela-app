import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setUsers from "../state"

const SearchForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const token = useSelector((state) => state.token);
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/search?firstName=${firstName}&lastName=${lastName}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    dispatch(setUsers({users: data}));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          First name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>

      {users.map(user => (
        <div key={user._id}>
          <p>{user.firstName} {user.lastName}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchForm;
