import React from 'react'
import './Homepage.css'
import { Link } from 'react-router'
function Homepage() {
  return (
    <div className='home'>
      <h1 className='home-title'>Home Page</h1>

      <div className='important-links'>
        <h2 className='home-sub-title'>Important Links</h2>
        <Link className='other-page-links' to={{ pathname: "//www.linkedin.com/in/john-steward-494487244/" }} target="_blank"> LinkedIn</Link>
        <Link className='other-page-links' to={{pathname: "//github.com/JohnSteward"}} target='blank'>GitHub</Link>
      </div>

      <div className='contact-details'>
        <h2 className='home-sub-title'>Contact Details</h2>
        <p className='contact'>Phone: +44 7555 781330</p>
        <p className='contact'>Email Address: stewardjohn165@gmail.com</p>
      </div>

      <div className='home-content'>
        <img src='/images/HomepageImages/PFP.png' className='pfp'></img>
        <div className='profile'>
            <h2 className='home-sub-title'>About Me</h2>
            <p className='home-description'>
                I graduated from the University of Bath with a Masters in Computer Science with First Class Honours. 
                During this time, I had the opportunity to gain a lot of experience in various fields, mainly 
                Machine Learning and Web Development. I have a strong passion for making projects that will solve real-world 
                problems and help people. As well as using my software skills to solve problems, I also enjoy building PCs, 
                having built one for myself, as well as speccing and building one for my friend.
            </p>
        </div>

        <div className='work'>
            <h2 className='home-sub-title'>Work Experience</h2>
            <div className='hawkeye'>
                <h3 className='work-title'>Cricket Systems Operator - Hawk-Eye Innovations (July 2023 - August 2024)</h3>
                <div className='drs'>
                    <h4 className='drs-title'>On-site - DRS</h4>
                    <p className='home-description'>
                        Spent my time travelling around the world, tracking live games including The Hundred, 
                        Indian domestic T20, Big Bash League, and India vs England Test Series. Travelled around the UK, 
                        India, and Australia. I worked in various teams rigging, testing, and running our systems, 
                        making decisions under the high pressure of live top level games.
                    </p>
                    <div className='work-images'>
                        {/* INCLUDE IMAGES OF TRAVELS AND WORK*/}
                    </div>
                    
                </div>
                <div className='ihawk'>
                    <h4 className='ihawk-title'>Remote Support - iHawk</h4>
                    <p className='home-description'>
                        I worked on remote support for the recently-brought-in iHawk system for County Championships, 
                        staying in communications with club analysts, helping them use the kit, tracking balls from 
                        clips captured from the GoPros, communicating with the software team to update them on bugs, 
                        and keeping ECB officials up to date with our work.
                    </p>
                    <div className='work-images'>
                        {/* INCLUDE IMAGES OF IHAWK STUFF IF I CAN FIND IT*/}
                    </div>
                    
                </div>
            </div>

            <div className='bartender'>
                <h3 className='work-title'>Bartender - The Lamb Inn (2021 - 2023)</h3>
                <p className='home-description'>
                    I spent the holiday seasons during my degree working as the primary bartender at the Lamb Inn, 
                    in my hometown. I was trusted with all work behind the bar and in-house. I mainly ran the bar alone, 
                    and was well-liked by customers and my boss, who trusted me to also train new hires for when I was 
                    at university. I would be behind the bar during large events, helping the other bartender while 
                    also running the bar.
                </p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Homepage
