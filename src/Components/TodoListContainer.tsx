import React, { useState } from 'react';
import { ListItem } from '../@Types/TodoListItem';
import { AddItemForm } from './AddItemForm';
import { TodoList } from './TodoList';

export const TodoListContainer = () => {
  const [todoListItems, setTodoListItems]= useState<ListItem[]>([]);

  const AddItem= (item: ListItem)=> {
    setTodoListItems([
      item,
      ...todoListItems
    ])
  };
  const deleteItem= (id: number)=> {
    const filteredItems: ListItem[] = todoListItems.filter(item => item.id !== id);
    setTodoListItems([...filteredItems])
  };

  const editItem= (id: number )=> {
    console.log('editItemCallback')
  };
  
  return(
    <div>
      <h1>Todo List</h1>
      <AddItemForm AddItemCallback={AddItem} />
      <TodoList todolistItems={todoListItems} deleteItemCallback={deleteItem} editItemCallback={editItem}  />
    </div>
  );
};
