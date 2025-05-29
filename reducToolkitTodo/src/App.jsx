import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setUpdatedText(todo.text);
  };

  // Save the updated todo
  const handleSaveEdit = () => {
    if (updatedText.trim() !== '') {
      dispatch(updateTodo({
        id: editingTodo.id,
        text: updatedText
      })); // Dispatch updateTodo action to Redux store
      setEditingTodo(null); // Reset editing state
      setUpdatedText(''); // Clear updated text input
    }
  };

  

  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo/>
      <Todos />
    </>
  )
}

export default App
