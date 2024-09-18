import React from 'react'
import Todo from "./Todo"

const TodoList = ({name,toggleTodo}) => {
  return (
    name.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>)
  );
}

export default TodoList;
