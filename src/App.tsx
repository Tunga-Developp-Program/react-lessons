import React, { useEffect, useState } from "react";
import "./assets/css/App.css";

function App() {
  const [users, makeUsers] = useState<any[]>([]);

  useEffect(() => {
    // Normal Javascript/Typescript fetch api method : GET REQUEST ...
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        makeUsers(data);
        console.log(users);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetch some data from api</h1>

      <table>
        <tr>
          <th>email</th>
          <th>username</th>
          <th>phone</th>
        </tr>
        {
          // Javascript within JSX
          // map is a higher order array method

          users.map(function (user, index, userarry) {
            return (
              <tr>
                <td> {user.email} </td>
                <td>{user.username} </td>
                <td>{user.phone}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
}

export default App;
