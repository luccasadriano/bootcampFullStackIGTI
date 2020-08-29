import React, { useState } from 'react'

const BAND_MENBERS = [
   {
      id: 1,
      name: 'Neil Peart',
      instrument: 'Bateria',
   },
   {
      id: 2,
      name: 'Alex Lifeson',
      instrument: 'Guitarra',
   },
   {
      id: 3,
      name: 'Geddy Lee',
      instrument: 'Baixo',
   },
]

export default function Band (){

   const [bandMenbers] = useState(BAND_MENBERS)
   const [bandName] = useState('Rush')

   //Exemplo const state = useState(BAND_MENBERS)
   // const bandMenbers = state[0]
   // const setBandMenbers = state[0]


   return (
      <div>
         <ul>
            <h4>{bandName}</h4>
            {bandMenbers.map(({ id, name, instrument }) => {
               return (
                  <li key={id}>
                     {name} - {instrument}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}
