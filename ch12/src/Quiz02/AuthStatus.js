import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './authSlice'

function AuthStatus() {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
   const dispatch = useDispatch()

   return (
      <div>
         {isAuthenticated ? (
            // 여기에 코드 작성
            <div>
               <p>로그인을하세요!</p>
               <button
                  onClick={() => {
                     dispatch(login(true))
                  }}
               ></button>
            </div>
         ) : (
            //   여기에 코드 작성
            <div>
               <p>로그인이 완료되었습니다!</p>
               <button
                  onclick={() => {
                     dispatch(logout(false))
                  }}
               ></button>
            </div>
         )}
      </div>
   )
}

export default AuthStatus
