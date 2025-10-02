import {React, useState} from 'react'
import {Link} from 'react-router'
import './Project.css'


function Project({title, image, readme, github, githubLink, pdf, pdfLink}) {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  
  const Reveal = () => {
    setOpen(!isOpen);
    if (isOpen){
      setHeight("400px");
    }else{
      setHeight("0px");
    }
  }

  return (
    <div className='project'>
      <div className='content'>
        <h1 className='project-name'>{title}</h1>

        <img src={image} className='image' alt=''/>
        <div className='desc-container' style={{maxHeight:height, overflow: 'hidden', transition: "0.4s"}}>
          <p className='readme'>
            {readme}
          </p>
        </div>
        <button className='show-more' onClick={() => Reveal()}>
          {isOpen ? 'Hide Description' : 'Show Description'}</button>
          
        {github && <button className='github'>
          <Link className='link' to={{ pathname: githubLink }} target="_blank"> GitHub Page</Link>
        </button>}
        {pdf && <button className='view-report'>
          <a href={pdfLink} target='_blank' rel='noreferrer' className='report-link'>View Report</a>
        </button>}
      </div>
    </div>
  )
}

export default Project
