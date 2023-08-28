import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = ({ users, setUsers, USERS_URL }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const userforEdit = users.find((user) => user.id === parseInt(userId));

  const [editedUser, setEditedUser] = useState(userforEdit);

console.log(editedUser);


  const Change = (event) => {
    const { name, value } = event.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const Edit = () => {
    fetch(`${USERS_URL}/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        const updatedUsers = users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        navigate(-1);
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <div className="editUser">
      <h2>Edit User</h2>
      <form className="editUserForm">
        <input
          type="text"
          name='name'
          value={editedUser.name}
          onChange={Change}
          placeholder="Name"
        />
        <input
          type="text"
          name='username'
          value={editedUser.username}
          onChange={Change}
          placeholder="Username"
        />
        <input
          type="email"
          name='email'
          value={editedUser.email}
          onChange={Change}
          placeholder="Email"
        />
        <input
          type="tel"
          name='phone'
          value={editedUser.phone}
          onChange={Change}
          placeholder="Telephone"
        />
        <button type="button" onClick={Edit}>
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
