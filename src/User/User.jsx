import React from 'react';
import { useParams } from 'react-router-dom';


function User({users}) {
  const { userId } = useParams();
  const user = users.find(user => user.id === parseInt(userId))
console.log(userId);


  return (
    <div className='user'>
      <h2>This is your selected USER </h2>
      <div className='data'>
        <strong>ID:</strong> {user.id}<br />
        <strong>Name:</strong> {user.name}<br />
        <strong>Email:</strong> {user.email}<br />
        <strong>Phone:</strong> {user.phone}<br />
        <br />  
      </div>
    </div>
  );
}

export default User;