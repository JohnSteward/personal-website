import React from 'react'
import './HobbiesPage.css'
import { Link } from 'react-router'
import Dish from './Dish'

function HobbiesPage() {
  return (
    <div className='hobbies'>
      <h1 className='hobbies-title'>Hobbies</h1>
      <p className='hobbies-description'>
        The hobbies shown on this page are the ones that I am most interested in at this time, and are some of
        my favourite passtimes.
      </p>
      {/* Hyperlinks */}
      <button className='hobby-hyper' 
        onClick={() => document.getElementById('tkd')?.scrollIntoView({behavior: 'smooth'})}>Go to TKD</button>
      <button className='hobby-hyper' 
        onClick={() => document.getElementById('3d-model')?.scrollIntoView({behavior: 'smooth'})}>Go to 3D Modelling</button>
      <button className='hobby-hyper' 
        onClick={() => document.getElementById('pc')?.scrollIntoView({behavior: 'smooth'})}>Go to PC Building</button>
      <button className='hobby-hyper' 
        onClick={() => document.getElementById('cooking')?.scrollIntoView({behavior: 'smooth'})}>Go to Cooking</button>

      <div className='tkd' id='tkd'>
        <h1 className='hobbies-title'>Taekwondo</h1>
        <p className='hobbies-description'>
            This is the hobby that I partake in most frequently, being my main source of exercise. I started Taekwondo
            when I was 10 years old, because my family did it, and I thought it looked really fun. When I was 15, I 
            received my 1st Dan black belt and started teaching in my home school. When I was 20, in my 3rd year of 
            university, I received my 2nd Dan black belt and was on the committee for my university Taekwondo club, 
            organising our participation in inter-uni competitions. In my final year of university, I became the club
            captain, coaching sessions each week, and coaching our members at competitions, leading to huge medal-hauls.
            In addition, I received my half-blue for my commitment to the sport, and for medalling in competitions
            for 2 years throughout my degree. I met some of my closest friends within the uni club, going on yearly holidays and keeping in touch after graduation. 
            Below are some pictures of various achievements and events that I have participated in throughout my Taekwondo journey:
        </p>
        <div className='tkd-pics'>
          <div className='pic-row'>
            <img src='/images/TKD/Meal.png' className='hobby-image' alt=''/>
            <img src='/images/TKD/Blues.png' className='hobby-image' alt=''/>
            <img src='/images/TKD/KB.png' className='hobby-image' alt=''/>
          </div>

          <div className='pic-row'>
            <img src='/images/TKD/Romania.png' className='hobby-image' alt=''/>
            <img src='/images/TKD/Poland.png' className='hobby-image' alt=''/>
          </div>

          <div className='pic-row'>
            <img src='/images/TKD/Norwich.png' className='hobby-image' alt=''/>
            <img src='/images/TKD/GTI.png' className='hobby-image' alt=''/>
            <img src='/images/TKD/Teams.png' className='hobby-image' alt=''/>
          </div>

        </div>
      </div>

      <div className='3d-model' id='3d-model'>
        <h1 className='hobbies-title'>3D Modelling</h1>
        <p className='hobbies-description'>
            When I was on placement at Hawk-Eye, I received a subscription to Udemy Business. I used this to take
            a course on Blender, learning how to make figures to print, since I have a 3D printer at home. I was also 
            given some modelling clay for Christmas during my final year of university, so I have made some characters 
            using clay, and painted them. Below are pictures of some of the models I have completed, as well as a link to my
            MakerWorld profile that shows the models I have made on Blender, and allows you to download the model file
            to print yourself.
        </p>
        <Link className='makerworld-link' to={{ pathname:"//makerworld.com/en/@JohnSteward165/upload" }} target="_blank">
         MakerWorld
        </Link>
        <h2 className='blender-title'>Blender Models</h2>
        <div className='models'>
          <div className='pic-row'>
            <img src='/images/3DModels/Stebe.png' className='hobby-image' alt=''/>
            <img src='/images/3DModels/Shadow.png' className='hobby-image' alt=''/>
            <img src='/images/3DModels/Lemon.png' className='hobby-image' alt=''/>
            <img src='/images/3DModels/Tank.png' className='hobby-image' alt=''/>
            <img src='/images/3DModels/Magolor.png' className='hobby-image' alt=''/>
          </div>
          <h2 className='clay-title'>Clay Models</h2>
          <div className='pic-row'>
            <img src='/images/3DModels/Spyro.png' className='hobby-image' alt=''/>
          </div>
        </div>
        
      </div>
      <div className='pc-building' id='pc'>
        <h1 className='hobbies-title'>PC Building</h1>
        <p className='hobbies-description'>
          I like PCs innit
        </p>
        <h2 className='hobby-subtitle'>My PC Setup</h2>
        <div className='pic-row'>
          <img src="/images/PC/my-setup.png" className='hobby-image' alt='' />
          <img src="/images/PC/my-pc.png" className='hobby-image' alt='' />
        </div>
      </div>
      <div className='cooking' id='cooking'>
        <h1 className='hobbies-title'>Cooking</h1>
        <p className='hobbies-description'>
            I started to really enjoy cooking during my final year of university, getting a carbon-steel wok for my 
            birthday. I started to experiment more with dishes and add new flavours to meals that I had made in the 
            past.
        </p>
        <div className='dishes'>
          <div className='pic-row'>
            <Dish title="Honey and Garlic Pork Belly" image="/images/Cooking/honey-pork.png" prep=" Set your portion of rice to cook.
              While it cooks, Cut pork belly into cubes. Season with salt, pepper, ginger and Chinese 5-spice. Finely chop 3 cloves of garlic.
              Prepare whatever veg you want with the dish. For the sauce, combine light soy sauce and honey to taste."
              method="Set a wok or large pan to high heat then add a high smoke point oil. Put the pork into the pan and sear on all
              sides, making sure all of the pieces are touching the pan. Once it has all seared, mix in your garlic and cook for
              around a minute. Then, add all of your veg and mix well before adding your sauce. Make sure all of the pork and veg
              is coated well in the sauce, allowing it to reduce into a sticky coating before serving over your rice." />

            <Dish title="Egg Fried Rice" image="/images/Cooking/fried-rice.png" prep="This works best with day-old rice, since it
              will be dry. Beat an egg into a bowl and season with salt and pepper. Chop all veg and meat that you want with it
              (This is very much a leftovers recipe). For the sauce, mix around 2 tbsp of soy sauce and 1 tbsp of oyster sauce, depending
              on portion size."
              method="Put a wok or pan on the hob on a high heat, then add a high smoke-point  oil. Cook all the meat until it is
              fully cooked (or heated if you are using leftovers), then put aside. Add more oil if the pan is dry, then lightly
              scramble the egg and put aside. Add your rice until it is mostly separated, then add the meat, egg and veg into the pan.
              Mix well and make sure the veg is hot, then add your sauce and mix until it is all well coated. Serve and garnish how
              you like (shown here I have topped it with Lao Gan Ma chilli crisp)." />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HobbiesPage
