import styled from 'styled-components'

const Card = styled.div`
   /* 여기에 코드 작성 */
   border: 2px solid black;
   padding: 20px;

   &:hover {
      border-color: red;
   }
`

function Quiz03() {
   return <Card>Hover me!</Card>
}
export default Quiz03
