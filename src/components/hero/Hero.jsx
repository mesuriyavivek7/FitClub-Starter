import React from 'react'
import './hero.css'
import Header from '../header/Header'

//import images
import hero_images from '../../assets/hero_image.png'
import hero_images_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

import NumberCounter from 'number-counter';

//import motion
import { motion } from 'framer-motion'

export default function Hero() {
  const transition={type:'spring' , duration:3}
  const mobile=window.innerWidth<=768?true:false
  return (
    <div className='hero' id='home'>
      <div className='blur blur-h'></div>
        <div className='left-h'>
          <Header></Header>

           <div className='the-best-ad'>
              <motion.div 
              initial={{left:mobile?"165px":"238px"}}
              whileInView={{left:'8px'}}
              transition={transition}
              className='emptydiv'></motion.div>
              <span>the best fitness club in town</span>
           </div>
           <div className='hero-text'>
             <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
             </div>
             <div>
                <span>Ideal Body</span>
             </div>
             <div className='span'>
                <span>
                  in here we will help you to shape and build your ideal body and living up your life to fullest
                </span>
             </div>
           </div>
           <div className='figures'>
             <div>
               <span>
               <NumberCounter start={100} end={140} delay='4' preFix="+"></NumberCounter>
               </span>
               <span>expert coaches</span>
             </div>
             <div>
               <span>
               <NumberCounter start={200} end={978} delay='4' preFix="+"></NumberCounter>
               </span>
               <span>member joined</span>
             </div>
             <div>
               <span>
               <NumberCounter start={1} end={50} delay='4' preFix="+"></NumberCounter>
               </span>
               <span>fitness programme</span>
             </div>
           </div>
           <div className='hero-buttons'>
             <button className='btn'>Get Started</button>
             <button className='btn'>Learn More</button>
           </div>
        </div>
        <div className='right-h'>
           <button className='btn'>Join Now</button>

           <motion.div className='heart-rate'
            whileInView={{right:'4rem'}}
            initial={{right:'-1rem'}}
            transition={transition}
           >
             <img src={heart} alt=''></img>
             <span>Heart Rate</span><span>116 bpm</span>
           </motion.div>

           <img src={hero_images} className='hero-image' alt=''></img>
           <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transition}
            src={hero_images_back} className='hero-image-back' alt=''></motion.img>

           <motion.div
           initial={{right:'37rem'}}
           whileInView={{right:'28rem'}}
           transition={transition}
           className='calories'>
             <img src={calories}></img>
             <div>
               <span>Calories Burned</span>
               <span>220kcl</span>
             </div>
           </motion.div>
        </div>
    </div>
  )
}
