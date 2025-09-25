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
                <Project title="Hand Tracker" image="/images/ProjectImages/FullPipeline.png" readme="For my Master’s dissertation, I built a hand tracker
                    using MediaPipe Hands, with the purpose of allowing people with movement conditions to 
                    play video games. The tracker would ignore small movements and exclusively register large, 
                    jerky motions to allow for the imprecise movements of people that have Parkinson’s Disease. 
                    For the project, I focussed on a control scheme that would allow the user to play Sonic the
                        Hedgehog 2, but in the future, it could be adjusted for other games, or have more features included,
                    such as a face or eye tracker, to allow the user to control their computer." 
                    githubLink="//github.com/JohnSteward/HandTracker" pdf={true} pdfLink="/Reports/GameTrack.pdf" />
                <Project title="Python Turn-Based RPG" image="/images/ProjectImages/A-Level.png" readme="A Level Project" 
                    githubLink="//github.com/JohnSteward/ALevelProject" pdf={true} pdfLink="/Reports/A-Level-Project.pdf" />
                <Project title="Natural Language Processing" image="/images/ProjectImages/NLP-Matrix.png" readme="This Coursework was a way 
                    to teach the fundamentals of Natural Language Processing, and what goes into the full pipeline, from 
                    tokenising plaintext, to outputting a class. This code contains various different tokenisation methods, 
                    multiple methods for extracting significant phrases from a piece of text, stemming/lemmatising tokens, etc. 
                    The words and phrases that are kept after cutting off the most and least common are weighted in each category 
                    (positive/negative film review) from the training data and fitted to an out-of-the-box Naive Bayes classifier,
                    as well as my own classifier for comparison." githubLink="//github.com/JohnSteward/NLP-Coursework" 
                    pdf={true} pdfLink="/Reports/NLP_Report.pdf"/>
            </div>
            <div className='project-row'>
                <Project title="row tester" image="/images/LaniFront.png" readme="hellooooooo" pdf={false} pdfLink=""/>
                <Project title="row tester" image="/images/LaniFront.png" readme="hellooooooo" pdf={false} pdfLink=""/>
            </div>
        </div>
        
    </div>
    
  )
}

export default ProjectsPage
