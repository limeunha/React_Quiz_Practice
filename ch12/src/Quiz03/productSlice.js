// 여기에 코드 작성

import { createslice } from '@reduxjs/toolkit'
import { act } from 'react'

const productSlice = createSlice({
   name: 'products',
   initialState: [],
   reducer: {
      appProduct: (state, action) => {
         state.push({ id: Date.now(), name: action.payload })
      },
      removeProduct: (state, action) => {
         return state.filter((product) => product.id !== action.payload)
      },
   },
})
export default productSlice.reducer
export const { addProduct, removeProduct } = productSlice.action
