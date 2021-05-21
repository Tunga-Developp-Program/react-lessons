import React from "react";

const TodoList = (props: any) => {

  return (
    <ul className="mt-2 text-secondary">
      {props.mytodos.map((todo: any) => {
        return <li> {todo}</li>;
      })}
    </ul>
  );
};
export default TodoList;
