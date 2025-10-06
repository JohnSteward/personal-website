import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <a className='element' href='/personal-website'>Home</a>
        <a className='element' href='/personal-website/projects'>Projects</a>
        <a className='element' href='/personal-website/hobbies'>Hobbies</a>
      </div>
    </div>
    
  )
}

export default Header
