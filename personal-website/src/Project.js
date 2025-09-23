import {React, useReducer, useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Project.css'


function Project({title, image, readme, githubLink}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='project'>
      <div className='content'>
        <h1 className='projName'>{title}</h1>

        <img src={image} className='image' alt=''/>

        {isOpen && <p className='readme'>
          {readme}
        </p>}

        <button className='show-more' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Collapse Description' : 'Show Description'}</button>
          
        <button className='github'>
          <Link className='link' to={{ pathname: githubLink }} target="_blank"> GitHub Page</Link>
        </button>
      </div>
    </div>
  )
}

export default Project
