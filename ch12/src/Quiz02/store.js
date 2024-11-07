import { configureStore } from '@reduxjs/toolkit'
import authSlice, { login } from './authSlice'

const store = configureStore({
   // 여기에 코드 작성
   reducer: {
      ahth: authSlice.reducer,
   },
})

export default store
