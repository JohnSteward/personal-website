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
            <img src='/personal-website/images/TKD/Meal.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/TKD/Blues.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/TKD/KB.png' className='hobby-image' alt=''/>
          </div>

          <div className='pic-row'>
            <img src='/personal-website/images/TKD/Romania.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/TKD/Poland.png' className='hobby-image' alt=''/>
          </div>

          <div className='pic-row'>
            <img src='/personal-website/images/TKD/Norwich.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/TKD/GTI.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/TKD/Teams.png' className='hobby-image' alt=''/>
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
        <a className='makerworld-link' href='https://makerworld.com/en/@JohnSteward165/upload' target="_blank">
         MakerWorld
        </a>
        <h2 className='hobby-subtitle'>Blender Models</h2>
        <div className='models'>
          <div className='pic-row'>
            <img src='/personal-website/images/3DModels/Stebe.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/3DModels/Shadow.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/3DModels/Lemon.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/3DModels/Tank.png' className='hobby-image' alt=''/>
            <img src='/personal-website/images/3DModels/Magolor.png' className='hobby-image' alt=''/>
          </div>
          <h2 className='hobby-subtitle'>Clay Models</h2>
          <div className='pic-row'>
            <img src='/personal-website/images/3DModels/Spyro.png' className='hobby-image' alt=''/>
          </div>
        </div>
        
      </div>
      <div className='pc-building' id='pc'>
        <h1 className='hobbies-title'>PC Building</h1>
        <p className='hobbies-description'>
          When I was in my first year of university, I wanted to get my own PC, since it was in the midst of the Covid pandemic,
          and I thought it would be much better to work with a PC than just my laptop when I was working from home. I had
          heard that it would be cheaper to build my own PC but knew nothing about how to build one. Through YouTube tutorials and
          the help of my friend Louis, I was able to build my PC and, while I have upgraded a few components, much remains as it was and
          it is still going strong to this day. Last year, my friend Tom was in the same situation as I was 4 years prior: wanting to
          build a PC but having no idea how. I had done lots of research when building mine, so I was able to spec out his PC to hi
          budget, and built it for him. I also helped him make his setup, and he uses it daily. I really enjoy researching into
          the best hardware and why some pieces of hardware are better than others, and like to keep up with PC building to this day,
          so I am able to upgrade my own PC effectively and build more in the future. The experience of building one from scratch has
          also given me useful knowledge into troubleshooting and fixing PC hardware, from testing components to see which is the issue,
          to replacing the correct components effectively, a skill which proved invaluable to my work while I was on placement
          at Hawk-Eye.
        </p>
        <h2 className='hobby-subtitle'>My PC Setup</h2>
        <div className='pic-row'>
          <img src="/personal-website/images/PC/my-setup.png" className='hobby-image' alt='' />
          <img src="/personal-website/images/PC/my-pc.png" className='hobby-image' alt='' />
        </div>
        <h2 className='hobby-subtitle'>Tom's Setup</h2>
        <div className='pic-row'>
          <img src="/personal-website/images/PC/tom-pc-top.png" className='hobby-image' alt='' />
          <img src="/personal-website/images/PC/tom-setup.png" className='hobby-image' alt='' />
          <img src="/personal-website/images/PC/tom-pc-side.png" className='hobby-image' alt='' />
        </div>
      </div>
      <div className='cooking' id='cooking'>
        <h1 className='hobbies-title'>Cooking</h1>
        <p className='hobbies-description'>
            I started to really enjoy cooking during my final year of university, getting a carbon-steel wok for my 
            birthday. I started to experiment more with dishes and add new flavours to meals that I had made in the 
            past. I am adding recipes below as I make them, and later on they will be added to a recipes app that I will make, that
            will allow users to add their own recipes so people can search for ones they want to cook with the ingredients they have.
        </p>
        <div className='dishes'>
          <div className='pic-row'>
            <Dish title="Honey and Garlic Pork Belly" image="/personal-website/images/Cooking/honey-pork.png" prep=" Set your portion of rice to cook.
              While it cooks, Cut pork belly into cubes. Season with salt, pepper, ginger and Chinese 5-spice. Finely chop 3 cloves of garlic.
              Prepare whatever veg you want with the dish. For the sauce, combine light soy sauce and honey to taste."
              method="Set a wok or large pan to high heat then add a high smoke point oil. Put the pork into the pan and sear on all
              sides, making sure all of the pieces are touching the pan. Once it has all seared, mix in your garlic and cook for
              around a minute. Then, add all of your veg and mix well before adding your sauce. Make sure all of the pork and veg
              is coated well in the sauce, allowing it to reduce into a sticky coating before serving over your rice." />

            <Dish title="Egg Fried Rice" image="/personal-website/images/Cooking/fried-rice.png" prep="This works best with day-old rice, since it
              will be dry. Beat an egg into a bowl and season with salt and pepper. Chop all veg and meat that you want with it
              (This is very much a leftovers recipe). For the sauce, mix around 2 tbsp of soy sauce and 1 tbsp of oyster sauce, depending
              on portion size."
              method="Put a wok or pan on the hob on a high heat, then add a high smoke-point  oil. Cook all the meat until it is
              fully cooked (or heated if you are using leftovers), then put aside. Add more oil if the pan is dry, then lightly
              scramble the egg and put aside. Add your rice until it is mostly separated, then add the meat, egg and veg into the pan.
              Mix well and make sure the veg is hot, then add your sauce and mix until it is all well coated. Serve and garnish how
              you like (shown here I have topped it with Lao Gan Ma chilli crisp)." />
            <Dish title="Spaghetti Bolognese" image="/personal-website/images/Cooking/bolognese.png" prep="For 4 portions: prepare 500g beef mince,
              dice one onion and 3 cloves of garlic, grate parmesan or cheddar for garnish at the end, prepare around 200ml red wine,
              one tin of chopped tomatoes, italian herb mix (or basil), and prepare any veg you want, as well as a stock cube."
              method="add olive oil to your pan, frying off the onion and garlic for a few minutes. Then add the mince and cook down
              until the fat is rendered and the meat browns nicely. Add the red wine and reduce most of it, before adding your tin of
              tomatoes. Put the spagetthi into your pot of boiling water with a generous pinch of salt and let it cook, stirring
              intermittently. Once the sauce is simmering nicely, crumble the stock cube into it, letting it dissolve and stir it
              around. Add the veg into the sauce and stir it, adding salt to taste. Once the pasta is nearly done cooking, add
              in your herbs to taste, and add a small amount of the pasta water to the sauce. Right at the end, you can add
              a small amount of milk to thicken the sauce a little bit more if you like. Drain the pasta and serve on a plate
              or bowl, add the bolognese on top and garnish generously with the cheese." />
            <Dish title="Toad in the Hole" image="/personal-website/images/Cooking/toad-in-the-hole.png" prep="2 Sausages per-person, Yorkshire pudding
              for two: 70g flour, one egg, 100ml milk, pinch of salt. Onion gravy and veg for sides." 
              method="Make the Yorkshire Pudding batter by putting the flour and salt into a bowl, cracking the egg into it,
              and, using an electric whisk, beat it together while slowly adding in the milk. Preheat the oven to 200 degrees
              on a fan oven (220 for electric oven), lightly grease a tin with oil and place the sausages in, cooking them for 10
              minutes. Take the sausages out, pour the batter into the tin, and put back in the oven for another 20-25 minutes.
              Once fully cooked, serve with gravy and veg." />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HobbiesPage
