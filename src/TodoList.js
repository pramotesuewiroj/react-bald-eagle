import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo }) => {
 
  return (
    <>
      <ul>
        {todoList.map((todoListItem) => (
          <TodoListItem key={todoListItem.id} todo={todoListItem} onRemoveTodo={onRemoveTodo}/>
        ))}
      </ul>
    </>
  ); 
  // console.log(todoList);  
}
  
export default TodoList;
