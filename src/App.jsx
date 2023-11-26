import { useEffect, useState } from "react";
import "./App.css";
import { UserList } from "./components/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async() =>{
    const response = await axios("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
  }
  useEffect(() => {
    fetchUsers()
  }, []);
  return (
    <>
      <UserList users = {users} setUsers = {setUsers}/>
    </>
  );
}

export default App;
