import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header-container'>
      <a className='element' href='/'>Home</a>
      <a className='element' href='/projects'>Projects</a>
      <a className='element' href='/hobbies'>Hobbies</a>
    </div>
  )
}

export default Header
