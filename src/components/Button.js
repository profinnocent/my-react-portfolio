import React from 'react'
import './Button.css'

const Button = ({text, bgcolor}) => {
  return (
    <div>
      <button className={bgcolor}>{text}</button>
    </div>
  )
}

export default Button