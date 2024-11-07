// 여기에 코드 구현

import { createStore } from 'redux'
import todoReducer from './todoReducer'

//store에 reducer 저장
const store = createStore(todoReducer)

export default store
