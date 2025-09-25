import React from 'react'
import Project from './Project'
import './ProjectsPage.css'
function ProjectsPage() {
  return (
    <div className='projects'>
        <h1 className='project-title'>Projects</h1>
        <p className='description'>
            This page shows all of the projects that I have made throughout my studies.
        </p>
        <div className='project-container'>
            <div className='project-row'>
                <Project title="Hand Tracker" image="/images/FullPipeline.png" readme="For my Master’s dissertation, I built a hand tracker
                    using MediaPipe Hands, with the purpose of allowing people with movement conditions to 
                    play video games. The tracker would ignore small movements and exclusively register large, 
                    jerky motions to allow for the imprecise movements of people that have Parkinson’s Disease. 
                    For the project, I focussed on a control scheme that would allow the user to play Sonic the
                        Hedgehog 2, but in the future, it could be adjusted for other games, or have more features included,
                    such as a face or eye tracker, to allow the user to control their computer." 
                    githubLink="//github.com/JohnSteward/HandTracker"/>
                <Project title="Python Turn-Based RPG" image="/images/LaniFront.png" readme="A Level Project" githubLink="//github.com/JohnSteward/ALevelProject" />
            </div>
            <div className='project-row'>
                <Project title="row tester" image="/images/LaniFront.png" readme="hellooooooo" />
                <Project title="row tester" image="/images/LaniFront.png" readme="hellooooooo" />
                <Project title="row tester" image="/images/LaniFront.png" readme="hellooooooo" />
            </div>
        </div>
        
    </div>
    
  )
}

export default ProjectsPage
