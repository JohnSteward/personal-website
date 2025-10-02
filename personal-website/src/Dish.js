import {React, useState} from 'react'
import './Dish.css'

function Dish({title, image, prep, method}) {
  const [isOpen, setOpen] = useState(true);
  const [height, setHeight] = useState("0px");

  const Reveal = () => {
    setOpen(!isOpen);
    if (isOpen){
      setHeight("650px");
      
    }else{
      setHeight("0px");
    }
  }

  return (
    <div className='dish'>
      <div className='dish-content'>
        <h1 className='dish-name'>{title}</h1>

        <img src={image} className='dish-image' alt=''/>
        <div className='recipe' style={{maxHeight:height, overflow: 'hidden', transition: "0.4s"}}>
          <p className='prep'>
            <h3>Prep:</h3>
            {prep}
          </p>
          <p className='method'>
            <h3>Method:</h3>
            {method}
          </p>
        </div>
        
        <button className='show-recipe' onClick={() => Reveal()}>
          {isOpen ? 'Show Recipe' : 'Hide Recipe'}</button>
          
      </div>
    </div>
  )
}

export default Dish
