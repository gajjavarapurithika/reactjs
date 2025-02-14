import React from 'react';

function App() {
  const data = [
{ id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
{ id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
{ id: 3, name: 'Sam Johnson', age: 45, email: 'sam.johnson@example.com' },
{ id: 4, name: 'Alice Brown', age: 23, email: 'alice.brown@example.com' },
];

  return (
    <div className="App">
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

