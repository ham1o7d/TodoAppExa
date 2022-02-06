import React from 'react';
import './App.css';
import { AddItemForm } from './Components/AddItemForm';
import { TodoListContainer } from './Components/TodoListContainer';

function App() {
  return (
    <div className="App">
      <TodoListContainer />
    </div>
  );
}

export default App;
