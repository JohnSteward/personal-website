import React from 'react'
import './Footer.css'
function Footer({colour}) {
  return (
    <div className='footer' style={{height: "200px",
        width: "100%",
        backgroundColor: colour,
        opacity: 0.8,
        alignItems: "center",
        justifyContent: "center",}}>
            <div className='copyright'>
                <p className='copyright-text'>Copyright &#169; 2025 John Steward</p>
            </div>
      
    </div>
  )
}

export default Footer
