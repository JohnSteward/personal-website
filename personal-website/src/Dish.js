import {React, useState} from 'react'
import './Dish.css'

function Dish({title, image, prep, method}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='dish'>
      <div className='dish-content'>
        <h1 className='dish-name'>{title}</h1>

        <img src={image} className='dish-image' alt=''/>

        {isOpen && <p className='prep'>
          <h3>Prep:</h3>
          {prep}
        </p>}
        {isOpen && <p className='method'>
          <h3>Method:</h3>
          {method}
        </p>}
        <button className='show-recipe' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide Recipe' : 'Show Recipe'}</button>
          
      </div>
    </div>
  )
}

export default Dish
