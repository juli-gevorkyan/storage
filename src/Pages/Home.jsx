import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

 const Home = () => {
  const USERS_URL = "http://localhost:3000/users"
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(USERS_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error( error));
  }, []);

  const del = (id) => {
    fetch(`${USERS_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {response.json(); console.log(response);})
      .then(() => {
        const usersAft = users.filter(user => user.id !== id);
        setUsers(usersAft);
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div>
        <button className='addButton' onClick={() => navigate('/adduser')}>Add New User</button><br></br>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/users/${user.id}`} className='viewLink'>View</Link>
                    <button className='editButton' onClick={()=>navigate(`/users/${user.id}/edit`)}>Edit</button>
                    <button className='deleteButton' onClick={()=>del(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home