import React from 'react';


const TodoListItem = ({ todo, onRemoveTodo }) => {
  // const { title, id } = todo;
  return (
    <>
      <li> 
        {todo.fields.Title} 
        <button onClick={()=>onRemoveTodo(todo)}>Remove</button>
      </li>
    </>
  );
}
  
export default TodoListItem;
