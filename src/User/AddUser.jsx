import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = ({ users, setUsers, USERS_URL }) => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const Change = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const Submit = (event) => {
    event.preventDefault();
    fetch(USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((newAddedUser) => {
        setUsers([...users, newAddedUser]);
        setNewUser(() => ({
          id: "",
          name: "",
          username: "",
          email: "",
          phone: "",
        }));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="addUser">
      <h2>Add User</h2>
      <form onSubmit={Submit} className="addUserForm">
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={Change}
          placeholder="Write Your Name"
        />
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={Change}
          placeholder="Write Your Username"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={Change}
          placeholder="Write Your Email"
        />
        <input
          type="tel"
          name="phone"
          value={newUser.phone}
          onChange={Change}
          placeholder="Write Your Telephone"
        />
        <button type="submit" onClick={() => navigate(-1)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
