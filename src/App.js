import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const setUsersHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    //This is a syntax for wrapping can use React.Fragment
    <>
      <AddUser onAdduser={setUsersHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
