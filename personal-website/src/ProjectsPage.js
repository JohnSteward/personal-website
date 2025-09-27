import React from 'react'
import Project from './Project'
import './ProjectsPage.css'
function ProjectsPage() {
  return (
    <div className='projects'>
        <h1 className='project-title'>Projects</h1>
        <p className='description'>
            This page shows all of the projects that I have made throughout my studies.
            {/* MAKE HYPERLINKS TO EACH ONE FOR EASE OF ACCESS */}
        </p>
        <div className='project-container'>
            <h1 className='project-title'>Dissertations</h1> 
            <div className='project-row' id='disserations'>
                <Project title="Hand Tracker" image="/images/ProjectImages/FullPipeline.png" readme="For my Master’s dissertation, I built a hand tracker
                    using MediaPipe Hands, with the purpose of allowing people with movement conditions to 
                    play video games. The tracker would ignore small movements and exclusively register large, 
                    jerky motions to allow for the imprecise movements of people that have Parkinson’s Disease. 
                    For the project, I focussed on a control scheme that would allow the user to play Sonic the
                        Hedgehog 2, but in the future, it could be adjusted for other games, or have more features included,
                    such as a face or eye tracker, to allow the user to control their computer." github={true}
                    githubLink="//github.com/JohnSteward/HandTracker" pdf={true} pdfLink="/Reports/GameTrack.pdf" />
                <Project title="Cricket Predictor" image="/images/ProjectImages/Cricket.png" readme="hellooooooo" github={true} 
                    githubLink="//github.com/JohnSteward/CricketML" pdf={true} pdfLink="/Reports/Cricket-Report.pdf"/>
            
            </div>
            <h1 className='project-title'>Other Projects</h1>
            <div className='project-row' id='row-1'>
                <Project title="Bayesian Machine Learning" image="/images/ProjectImages/Bayesian-Image.png" readme="Bayesian innit"
                    github={true} githubLink="//github.com/JohnSteward/Bayesian" pdf={true} pdfLink="/Reports/Bayesian-Report.pdf" />
                
                <Project title="Natural Language Processing" image="/images/ProjectImages/NLP-Matrix.png" readme="This Coursework was a way 
                    to teach the fundamentals of Natural Language Processing, and what goes into the full pipeline, from 
                    tokenising plaintext, to outputting a class. This code contains various different tokenisation methods, 
                    multiple methods for extracting significant phrases from a piece of text, stemming/lemmatising tokens, etc. 
                    The words and phrases that are kept after cutting off the most and least common are weighted in each category 
                    (positive/negative film review) from the training data and fitted to an out-of-the-box Naive Bayes classifier,
                    as well as my own classifier for comparison." github={true} githubLink="//github.com/JohnSteward/NLP-Coursework" 
                    pdf={true} pdfLink="/Reports/NLP_Report.pdf"/>

                <Project title="Python Turn-Based RPG" image="/images/ProjectImages/A-Level.png" readme="A Level Project" github={true}
                    githubLink="//github.com/JohnSteward/ALevelProject" pdf={true} pdfLink="/Reports/A-Level-Project.pdf" />
            </div>

            <div className='project-row' id='row-2'>
                <Project title="Chrome Extension for Social Media" image="/images/ProjectImages/ESP.png" readme="ESP Innit" pdf={false} pdfLink="" github={true} 
                    githubLink="//github.com/JohnSteward/ESP-Project"/>

                <Project title="Computer Vision" image="/images/ProjectImages/Vision.png" readme="Vision innit" pdf={true}
                    pdfLink="/Reports/Vision-Report.pdf" github={false} />
            </div>
        </div>
        
    </div>
    
  )
}

export default ProjectsPage
