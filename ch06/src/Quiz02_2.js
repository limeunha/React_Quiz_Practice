import React, { useMemo } from 'react'
import { useState } from 'react'

const Quiz02_1 = ({ numbers }) => {
   // filter, reduce 사용하여 홀수만 필터링하고 그 합계를 계산한 후 useMemo로 처리합니다.
   // const oddSum =
   if (number % 3 === 0) return 0
   const oddSum = numbers.reduce((a, b) => a + b)

   const useMemo = () => {
      const [number, setNumber] = useState('')

      const onInset = (e) => {
         const oddSum = oddSum.concat(number(number))
         setNumber('')
      }
   }

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계: {/* 여기에 결과를 출력하세요 */ oddSum}</p>
      </div>
   )
}

export default Quiz02_1
