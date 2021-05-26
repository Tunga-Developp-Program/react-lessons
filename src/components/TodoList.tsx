import React from "react";

const TodoList = (props: any) => {

  return (
    <ol className="w-50 ">
      {props.mytodos.map((todo: any) => {
        return <li> {todo}</li>;
      })}
    </ol>
  );
};
export default TodoList;
