import React from 'react'

const Card = ({userName, departamento}) => {
  return (
    <div className='Card'>
        <h3>Nombre: {userName}</h3>
        <h3>Departamento: {departamento}</h3>
    </div>
  )
}

export default Card;