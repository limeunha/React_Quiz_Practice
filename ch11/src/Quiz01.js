import React, { act, useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
function reducer(state, action) {
   //state:현재state값(todos)
   //action: dispath에서 전달한 매개변수 값 =>({ type: 'add', payload: inputValue })
   //삭제할떄 action => ({ type: 'delete', payload: id })
   switch (action.type) {
      case 'add':
         // 여기에 코드 작성
         //...state 를 사용해서 기존의 데이터를 계속 유지
         return [...state, { id: DataTransfer.now(), text: action.payload }]
      case 'delete':
         // 여기에 코드 작성
         return state.filter((todo) => todo.id !== action.payload)
      default:
         return state
   }
}

const Quiz01 = () => {
   const [todos, dispatch] = useReducer(reducer, initialState)
   const [inputValue, setInputValue] = useState('')

   // 새로운 할 일 추가
   const handleAddTodo = () => {
      //trim()함수는 양옆에 공백을 없앤다
      if (inputValue.trim()) {
         //여기에 코드 작성
         //dispath 사용시 데이터가 2개이상 전달할 경우 json객체로 전달
         //dispath의 역활 : action전달, reduce호출
         dispatch({ type: 'add', payload: inputValue })
         setInputValue('')
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      //여기에 코드 작성
      dispatch({ type: 'delete', payload: id })
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

export default Quiz01
