import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [ name, setName ] = useState("");
  const [ username, setUsername ] = useState("");  
  const [ newUserName, setNewUsername ] = useState(""); 

  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input 
          type="text" 
          placeholder="Name..." 
          onChange={event => {setName(event.target.value)}}
        />
        <input 
          type="text" 
          placeholder="Username..." 
          onChange={event => {setUsername(event.target.value)}}
        />
        <button 
          onClick={() => { 
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1 , 
                name, 
                username
              })
            )}
          }>
            Add User
          </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input type="text" placeholder='New username ...'
                onChange={event => {setNewUsername(event.target.value)}}  />
              <button 
                onClick={() => {
                  dispatch(updateUsername({ id: user.id, username: newUserName }))
                }}>Update Username</button>
              <button 
                onClick={() => {
                  dispatch(deleteUser({id: user.id}))
                }}
              >Delete User</button>
            </div>
          )
        })}
      </div>
    </div> 
  );
}

export default App;
