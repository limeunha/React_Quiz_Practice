const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   switch (action.type) {
      case 'increment':
         // 여기에 코드 작성(숫자를 감소 시킴)
         return { count: state.count + 1 }
      case 'decrement':
         // 여기에 코드 작성(숫자를 증가 시킴)
         return { count: state.count - 1 }
      default:
         return state
   }
}

export default counterReducer
