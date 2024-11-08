// 여기에 코드 작성

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from './productSlice'

function ProductList() {
   const [newProduct, setProdct] = useState('')
   const dispatch = useDispatch()
   const product = useSelector((state) => state.product)
   return (
      <div>
         <input value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="상품명" />
         <button onClick={() => dispatch(newProduct)}>상품추가</button>
         <ul>
            {todos.map((product) => (
               <li key={product.id}>
                  {product.text}
                  <button onClick={() => dispatch(removeProduct(product.id))}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
