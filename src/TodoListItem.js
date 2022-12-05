import React from 'react';


const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { title, id } = todo;
  return (
    <>
      <li> 
        {title} 
        <button onClick={onRemoveTodo}>Remove</button>
      </li>
    </>
  );
}
  
export default TodoListItem;
