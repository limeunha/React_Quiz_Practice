function Quiz03_sub(props) {
   // 함수 전달
   const { updateMessage } = props
   return (
      <div>
         <button onClick={updateMessage}>메시지 변경</button>
      </div>
   )
}

export default Quiz03_sub
