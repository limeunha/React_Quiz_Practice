import React, { useState } from 'react'
import './App.css'

const Quiz03 = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '메타몽', img: '/images/메타몽.png' },
      { id: 3, name: '파이리', img: '/images/파이리.png' },
   ])

   const [inputName, setInputName] = useState('')
   const [nextId, setNextId] = useState(4)

   const onRemove = (id) => {
      const nextPokes = pokemons.filter((poke) => poke.id !== id)
      setPoke(nextPokes)
   }

   const pokesList = pokemons.map((poke) => (
      <li
         key={poke.id}
         onDoubleClick={() => {
            onRemove(poke.id)
         }}
      >
         <div>
            <img src={poke.img} alt={poke.name} width="130" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   const onChange = (e) => setInputName(e.targe.value)

   const onClick = () => {
      const nextPokes = pokemons.concat({
         id: nextId,
         name: inputName,
         img: './imges/' + inputName + '.png',
      })

      //초기화
      setPoke(nextPokes) //pokemons state 값을 업데이트
      setNextId(nextId + 1)
      setInputName('')
   }

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input value={inputName} onChange={onChange}></input>
         <button onClick={onClick}>등록</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default Quiz03
