import styled from 'styled-components'

const Button = styled.button`
   background-color: ${(props) => props.color || 'gray'};
   /* 여기에 코드 작성 */
   color: white;
   padding: 10px 20px;
   border: none;
   border-radous: 5px;
`

function Quiz02() {
   return (
      <div>
         <Button color="blue">Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02
