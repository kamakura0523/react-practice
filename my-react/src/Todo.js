import React from 'react'

const Todo = ({todo , toggleTodo}) => {

    const handleTodoClick = (e) => {
        toggleTodo(todo.id);
    };
    

  return (
    <div>
    <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}></input>
    </label>
        {todo.game}
    </div>
  )
}

export default Todo;
