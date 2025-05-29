import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos(){
   const todos =  useSelector (state => state.todo.todos)
   const dispatch = useDispatch()

   const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editingId, text: editText }));
      setEditingId(null);
      setEditText('');
    }
  };
    return (
        <>
        <div>Todos</div>
        {todos.map((todo) => (
        <li key ={todo.id}>
            {todo.text}
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEditClick(todo)}>✏️</button>
              </>
            )}
            <button 
             onClick={() => dispatch(removeTodo(todo.id))}
            >X</button>
        </li>
        ))}
        </>
)
}

export default Todos