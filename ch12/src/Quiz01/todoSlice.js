import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      //여기에 코드 작성
      //redux 툴킷은 불변성을 유지하므로 push 사용 가능
      addTodo: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      removeTodo: (state, action) => {
         //filter, map 사용시 eturn을 하지 않으면 그냥 배열 그 자체만 만드렁 지므로 반드시 리턴
         return state.filter((todo) => todo.id !== action.payload)
      },
   },
})

export default todoSlice
export const { addTodo, removeTodo } = todoSlice.actions
