import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ListNames = () => {
const {names}= useContext(ThemeContext)
  return (
    <div>
       {names.map((name: any, index: number) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  )
}

export default ListNames
