import React, { useEffect, useState } from "react";
import "./assets/css/App.css";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    // Normal Javascript/Typescript fetch api method
    fetch("http://127.0.0.1:8000/api/users/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("eric:eric")}`,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
        console.log(users);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetch some data from api</h1>

      <ol>
        {
          // Javascript within JSX
          // map is a higher order array method

          users.map(function (user) {
            return (
              <li>
             
                {user.username} : {user.url}
              </li>
            );
          })
        }
      </ol>
    </div>
  );
}

export default App;
