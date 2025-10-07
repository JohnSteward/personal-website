import React from 'react'
import Project from './Project'
import './ProjectsPage.css'
function ProjectsPage() {
  return (
    <div className='projects'>
        <h1 className='project-title'>Projects</h1>
        <p className='description'>
            This page shows all of the projects that I have made throughout my studies. Below are Hyperlinks to all of the projects
            on this page.
        </p>
        {/* HYPERLINKS TO EACH PROJECT IN THE ORDER THEY ARE SHOWN, ROW BY ROW */}
        <div className='hyperlinks'>
            <button className='hyperlink' 
                onClick={() => document.getElementById('dissertations')?.scrollIntoView({behavior: 'smooth'})}>
                Dissertation Projects</button>
        </div>
        <div className='hyperlinks'>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-1')?.scrollIntoView({behavior: 'smooth'})}>
                Bayesian ML (Python)</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-1')?.scrollIntoView({behavior: 'smooth'})}>
                Natural Language Processing (Python)</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-1')?.scrollIntoView({behavior: 'smooth'})}>
                Computer Vision (Python)</button>
        </div>
        <div className='hyperlinks'>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-2')?.scrollIntoView({behavior: 'smooth'})}>
                Chrome Extension (JavaScript)</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-2')?.scrollIntoView({behavior: 'smooth'})}>
                Ray-Tracer (C++)</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-2')?.scrollIntoView({behavior: 'smooth'})}>
                Productivity App (ReactJS)</button>
        </div>
        <div className='hyperlinks'>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-3')?.scrollIntoView({behavior: 'smooth'})}>
                Pygame RPG</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-3')?.scrollIntoView({behavior: 'smooth'})}>
                Chat Server (Java)</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-3')?.scrollIntoView({behavior: 'smooth'})}>
                Visual Computing (WebGL)</button>
        </div>
        <div className='hyperlinks'>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-4')?.scrollIntoView({behavior: 'smooth'})}>
                Dungeon of Doom (Java)</button>
            <button className='hyperlink' 
                onClick={() => document.getElementById('row-4')?.scrollIntoView({behavior: 'smooth'})}>
                SRPN Calculator (Python)</button>
        </div>

        
        <div className='project-container'>
            <h1 className='project-title'>Dissertations</h1> 
            <div className='project-row' id='dissertations'>
                <Project title="Hand Tracker" image="/personal-website/images/ProjectImages/FullPipeline.png" readme="For my Master’s dissertation, I built a hand tracker
                    using MediaPipe Hands, with the purpose of allowing people with movement conditions to
                    play video games. The tracker would ignore small movements and exclusively register large,
                    jerky motions to allow for the imprecise movements of people that have Parkinson’s Disease.
                    For the project, I focussed on a control scheme that would allow the user to play Sonic the
                    Hedgehog 2, but in the future, it could be adjusted for other games, or have more features included,
                    such as a face or eye tracker, to allow the user to control their computer." github={true}
                    githubLink="https://github.com/JohnSteward/HandTracker" pdf={true} pdfLink="/personal-website/Reports/GameTrack.pdf" />
                <Project title="Cricket Predictor" image="/personal-website/images/ProjectImages/Cricket.png" readme="For my 3rd year dissertation
                project, I made a Machine Learning model, with data from every ball of the IPL in 2022, in order to predict the number
                of runs scored from a given ball, taking into account the bowler, the batsman/batsman partner, location, etc. Using
                Gaussian Processes Classification, I built a multiclass classifier to predict how many runs are scored. Using this,
                I would test the model by simulating specific overs and compare them to the same over that actually occurred in the
                IPL. The purpose of this project was to create an alternative method to calculate the target runs for games that have
                been interrupted by rain, with the existing method (Duckworth-Lewis Method) having some issues that are criticised to
                this day." github={true} githubLink="https://github.com/JohnSteward/CricketML" pdf={true} pdfLink="/personal-website/Reports/Cricket-Report.pdf"/>
            
            </div>
            <h1 className='project-title'>Other Projects</h1>
            <div className='project-row' id='row-1'>
                <Project title="Bayesian Machine Learning" image="/personal-website/images/ProjectImages/Bayesian-Image.png" readme="For this project,
                 I was given a scenario of using Bayesian techniques to analyse a set of mechanical components and their degradation
                rates. The components had 5 properties, from X1 to X5, which have different weightings based on how much they affect
                the degradation rate. Using Monte Carlo sampling techniques over a uniform distribution and the enhanced model defined
                in the report, I was able to gain more insight into the different properties and how much they affect the degradation.
                I then compared this technique to plugging the same data into a black-box neural network model which, since there is
                very little known data to use, overfits very quickly, showing that Bayesian techniques are much more useful in a
                situation where there is little known data and many uncertainties that we are able to model as distributions from
                which to sample." github={true} githubLink="https://github.com/JohnSteward/Bayesian" pdf={true} 
                pdfLink="/personal-website/Reports/Bayesian-Report.pdf" />
                
                <Project title="Natural Language Processing" image="/personal-website/images/ProjectImages/NLP-Matrix.png" readme="This project was a full
                    use of the fundamentals of Natural Language Processing, and what goes into the full pipeline, fro
                    tokenising plaintext, to outputting a class, be it, a positive or negative film review. This code contains various
                    different tokenisation methods, multiple methods for extracting significant phrases from a piece of text,
                    stemming/lemmatising tokens, etc. The words and phrases that are kept after cutting off the most and least common
                    are weighted in each category (positive/negative film review) from the training data and fitted to an out-of-the-box
                    Naive Bayes classifier, as well as my own classifier for comparison." 
                    github={true} githubLink="https://github.com/JohnSteward/NLP-Coursework" pdf={true} pdfLink="/personal-website/Reports/NLP_Report.pdf"/>
                <Project title="Computer Vision" image="/personal-website/images/ProjectImages/Vision.png" readme="For this group project, there were
                3 main parts: Edge detection, template matching, and SIFT feature detection. For the edge detection, we used a Hough
                Line transform on a filtered image, since this transform is extremely sensitive to noise. Using OpenCV, we could use
                non-maximum detection and suppression to return an image with just the edges kept. For the template matching, we were
                given each of the templates as training images, using a Gaussian Pyramid to be able to adapt the images to different
                scales and storing each of the blurred images to shift over the testing images (which have multiple of the templates
                in them with the aim of finding all of them accurately). We use Intersection over Union to measure the overlap and
                check whether it is a match. For SIFT, we have the same training images, but the testing images have rotated and scaled
                images. We use Difference of Gaussian with different scales to achieve an invariance to scale, finding local extrema in
                scale and space, storing potential keypoints on the image. After refining these, we assign an orientation to achieve an
                invariance to rotation." pdf={true} pdfLink="/personal-website/Reports/Vision-Report.pdf" github={false} />
                
            </div>

            <div className='project-row' id='row-2'>
                <Project title="Chrome Extension for Social Media" image="/personal-website/images/ProjectImages/ESP.png" readme="This group project
                involved creating a chrome extension that would allow users to customise their experience, removing certain features
                of social media applications from the html on the webpage. The application focussed on Youtube, Facebook, and Instagram.
                The aim of this project was to help combat social media addiction by restricting some of the most addictive features
                from them, as chosen from a survey of university students." pdf={false} pdfLink="" github={true}  
                githubLink="https://github.com/JohnSteward/ESP-Project"/>

                <Project title="Ray-Tracer C++" image="/personal-website/images/ProjectImages/Graphics-Image.png" readme="For this project, I implemented
                many graphics concepts using a ray tracer skeleton. This ranged from rendering a simple sphere with multiple
                materials, like rendering a glass sphere that only has reflective and refractive properties, a mirror sphere with purely
                reflective properties, and a Phong material that incorporates ambient, diffuse and specular lighting, being 
                calculated either from a point light or a directional light source. Calculating the path of the rays to the objects
                allows us to create an accurate model of these properties. I also implemented Constructive Solid Geometry, calculating
                intersection, union, and difference operations by choosing whether to render a geometry depending on which object a
                ray passes through first. Finally, I implemented photon mapping using a point light, allowing me to render much more
                accurate lighting, by sending many photon rays and changing the shading of wherever they are absorbed, after being
                reflected a random number of times, allowing for lighter patches on the walls and table, as shown in the image above."
                pdf={true} pdfLink="/personal-website/Reports/Graphics-Report.pdf"/>

                <Project title="Productivity Web App" image="/personal-website/images/ProjectImages/SPaM.png" readme="This was a group web app project focussed on tracking each 
                user’s productivity goals and tracking how different types of music can affect a user's productivity. This made 
                use of the React framework on the frontend, as well as a Spotify API. The database was constructed using MongoDB. 
                I worked primarily on the frontend, on the web page design and sending requests to the backend." github={false} 
                pdf={true} pdfLink="/personal-website/Reports/SPaM-Report.pdf" />
            </div>
            <div className='project-row' id='row-3'>
                <Project title="Python Turn-Based RPG (Pygame)" image="/personal-website/images/ProjectImages/A-Level.png" readme="For my A-level
                project, I learned how to use Pygame by creating this turn-based RPG. The player is able to explore the world, encounter
                enemies and battle them using random encounters, there are side quests allowing the player to get new items, and new
                characters to join their party, and there are multiple endings based on whether the player has all the optional
                characters and items. I did not have the time to make all of the sprites for the game, so I focussed on getting
                the mechanics finished, and adding all of the features that I want, like equipping items to allow the player to use
                different spells." github={true} githubLink="https://github.com/JohnSteward/ALevelProject" pdf={true} 
                pdfLink="/personal-website/Reports/A-Level-Project.pdf" />

                <Project title="Java Chat Server" image="/personal-website/images/ProjectImages/chat-server.png" readme="For this project,
                    I created a chat server, and learned multithreading in Java. When the code is run, you can bind it to a specified
                    port for clients to connect to. When a client connects, they are asked for their name, or can choose to remain
                    anonymous. Any message from one client will be sent to the server and displayed on all other clients' console.
                    You can also run a bot client to the same server, that will constantly listen for messages beginning with
                    'bot', and there are some preset commands for the bot to respond to. As with clients, the bot's messages will
                    be displayed on all clients' consoles. If I were to remake this with the tech we have now, I would integrate
                    an AI for the chat bot rather than having preset commands." github={true} 
                    githubLink="https://github.com/JohnSteward/Chat-Server" />

                <Project title="Visual Computing (WebGL)" image="/personal-website/images/ProjectImages/WebGL.png" readme="For this project, there
                    were multiple parts, from rendering a cube, to adding textures, rendering object files, and creating an animation.
                    When doing each of these tasks, I had to create new materials, one of which just includes ambient lighting,
                    showing just a flat colour, and another using a Phong lighting model, allowing for shadow on the object by including
                    diffuse and specular lighting, as well as ambient. For animations, such as rotation, I would simply multiply
                    each of the vertices of the object by a 3x3 matrix corresponding to the angle of rotation, getting a smoother
                    animation with a smaller angle of rotation being applied more times." github={true} githubLink="https://github.com/JohnSteward/WebGL" pdf={true} pdfLink="/personal-website/Reports/Visual-Report.pdf"/>
            </div>
        </div>
        <div className='project-row' id='row-4'>
            <Project title="Dungeon of Doom" image="/personal-website/images/ProjectImages/DoD.png" readme="For this project, I created a text-based
                game in Java. In each turn, you are able to move one square in one of the 4 cardinal directions, you can use a pickup
                command to pick up gold when you are standing over it, look at a 5x5 grid surrounding you, or leave the level when you
                have picked up enough gold. While you traverse the level, there will be enemies chasing you. Every 3 turns, they also use
                the look command and, if the player is within the 5x5 grid, the enemy will move to that spot before beginning to move
                randomly again. If the enemies catch you, you lose the game. There are 3 levels in this game, each map increasing
                in size." github={true} githubLink="https://github.com/JohnSteward/Dungeon-of-Doom" />
            
            <Project title="SRPN Calculator" image="/personal-website/images/ProjectImages/srpn.png" readme="For this project, I made a Python
            implementation of the SRPN calculator, using an existing one as a tester to check that all of the features that I
            include are correct. I also used it to check for new features that I had not yet implemented. This implementation
            takes a string input from the user, and separates all of the parts, adding numbers and operators to the stack
            in the correct order to output the correct result, popping elements from the stack and calling functions as required
            to output the desired result." github={true} githubLink="https://github.com/JohnSteward/SRPN" />
        </div>
        
    </div>
    
  )
}

export default ProjectsPage
