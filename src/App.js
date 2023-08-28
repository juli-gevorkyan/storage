import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import User from "./User/User";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import NavBar from "./Components/NavBar";


function App() {
  const [users, setUsers] = useState([]);
  const USERS_URL = "http://localhost:3000/users"

  useEffect(() => {
    fetch(USERS_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<NavBar />} path="/">
            
            <Route element={<Home />} className={({isActive}) => isActive ? "active" : 'Link'} index />
            <Route element={<About />} className={({isActive}) => isActive ? "active" : 'Link'}  path="/about" />
            <Route element={<Contact />} className={({isActive}) => isActive ? "active" : 'Link'} path="/contact" />
            <Route element={<NotFound />} path="/*" />

              
            <Route element={<User users={users} />} path="/users/:userId" />
            <Route element={<AddUser users={users} setUsers={setUsers} USERS_URL={USERS_URL} />} path="/adduser" />
            <Route element={<EditUser users={users} setUsers={setUsers} USERS_URL={USERS_URL}/>} path="/users/:userId/edit" />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




