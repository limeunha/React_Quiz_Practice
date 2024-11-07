// 여기에 코드 구현
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TodoComponent() {
   const [inputValue, setInputValue] = use('')
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispathch()

   //추가버튼
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'addTodo', payload: inputValue })

         setInputValue('')
      }
   }

   //삭제버튼
   const handleDeleteTodo = () => {
      dispatch({ type: 'deleteTodo', payload: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoComponent
