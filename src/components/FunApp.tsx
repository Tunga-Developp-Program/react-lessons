import React from "react";

// when make a chnage in the state ....
// the app re-renders
const FunApp = () => {
  let [counter, setCounter] = React.useState(0);

  // Async and await

  const getApi = async () => {
    const jsonData = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await jsonData.json();

    console.log(data);
  };
  React.useEffect(() => {
    getApi();
  }, []); // dependecy array .... runs once if the dependency array is empty..
  // if depency array absent runs when any state changes...
  //  runs according to change in state of the

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter++)}>increase</button>
      <button onClick={() => setCounter(counter--)}>decrease</button>
    </div>
  );
};

export default FunApp;
