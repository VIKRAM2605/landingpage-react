import React from 'react'
import Home from '../pages/Home'
import "../../styles/Card.css"
export default function(props) {
  return (
    <div className="card">
        <h2 className='numbers'>{props.numbers}</h2>
        <h4 className='text'>{props.text}</h4>
    </div>
  )
}
