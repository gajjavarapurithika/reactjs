import React, { useContext } from 'react';
import { UserContext, UserProvider } from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);
  const changeUserInfo = () => {
    setUser({ name: 'Jane Smith', age: 25 });
  };
  return (
    <button onClick={changeUserInfo}>Change User</button>
  );
};

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>React Context Example</h1>
        <UserProfile />
        <ChangeUser />
      </div>
    </UserProvider>
  );
}

export default App;

