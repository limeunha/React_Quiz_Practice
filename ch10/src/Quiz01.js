import styled from 'styled-components'

const StyledInput = styled.input.attrs({ type: 'text' })`
   background-color: skyblue;
   width: 400px;
   height: 100px;
` // 여기에 코드 작성
const StyledInput2 = styled(StyledInput)`
   background-color: white;
` // 여기에 코드 작성

function Quiz01() {
   return (
      <div>
         {/* 여기에 코드 작성 */}
         <StyledInput />
         <StyledInput2 />
      </div>
   )
}

export default Quiz01
