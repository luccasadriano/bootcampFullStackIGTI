import React, { Component } from 'react'

export default class Band extends Component {
   constructor() {
      super()

      this.state = {
         bandName: 'Rush',

         bandMenbers: [
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
      }
   }
   render() {
      const { bandName, bandMenbers } = this.state
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
}
