// 여기에 코드 작성
function ProductList() {
   return (
      <div>
         <input
            value={newList}
            onChange={(e) => {
               setNewList(e.target.value)
            }}
            placeholder="포도"
         />
         <button onClick={() => dispatch(addList(newList))}>상품 추가</button>
         <ul>
            {newList.map((list) => (
               <li key={list.id}>
                  {list.text}
                  <button onClick={() => dispatch(removeList(list.id))}>상품 삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
