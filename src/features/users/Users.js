import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here


function Users() {
  const users = useSelector((state) => state.users);
  console.log(users)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map((user)=>(<p key={user.username}>{user.username}</p>))}
      </ul>
      <p>Total Users: {users.length}</p>
    </div>
  );
}

export default Users;
