import React from 'react'
import './HobbiesPage.css'
import { Link } from 'react-router'

function HobbiesPage() {
  return (
    <div className='hobbies'>
      <h1 className='hobbies-title'>Hobbies</h1>
      <p className='hobbies-description'>
        The hobbies shown on this page are the ones that I am most interested in at this time, and are some of
        my favourite passtimes.
      </p>

      <div className='tkd'>
        <h1 className='hobbies-title'>Taekwondo</h1>
        <p className='hobbies-description'>
            This is the hobby that I partake in most frequently, being my main source of exercise. I started Taekwondo
            when I was 10 years old, because my family did it, and I thought it looked really fun. When I was 15, I 
            received my 1st Dan black belt and started teaching in my home school. When I was 20, in my 3rd year of 
            university, I received my 2nd Dan black belt and was on the committee for my university Taekwondo club, 
            organising our participation in inter-uni competitions. In my final year of university, I became the club
            captain, coaching sessions each week, and coaching our members at competitions, leading to huge medal-hauls.
            In addition, I received my half-blue for my commitment to the sport, and for medalling in competitions
            for 2 years throughout my degree. Below are some pictures of various achievements and events that I have
            participated in throughout my Taekwondo journey:
        </p>
        <div className='tkd-pics'>

        </div>
      </div>

      <div className='3d-model'>
        <h1 className='hobbies-title'>3D Modelling</h1>
        <p className='hobbies-description'>
            When I was on placement at Hawk-Eye, I received a subscription to Udemy Business. I used this to take
            a course on Blender, learning how to make figures to print, since I have a 3D printer at home. I was also 
            given some modelling clay for Christmas during my final year of university, so I have made some characters 
            using clay, and painted them. Below are pictures of all the models I have completed, as well as a link to my
            MakerWorld profile that shows the models I have made on Blender, and allows you to download the model file
            to print yourself.
        </p>
        <Link className='makerworld-link' to={{ pathname:"//makerworld.com/en/@JohnSteward165/upload" }} target="_blank">
         MakerWorld
        </Link>
      </div>

      <div className='cooking'>
        <h1 className='hobbies-title'>Cooking</h1>
        <p className='hobbies-description'>
            I started to really enjoy cooking during my final year of university, getting a carbon-steel wok for my 
            birthday. I started to experiment more with dishes and add new flavours to meals that I had made in the 
            past.
        </p>
      </div>
      
    </div>
  )
}

export default HobbiesPage
