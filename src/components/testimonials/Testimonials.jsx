import React, { useState } from 'react'
import './testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
//import images
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'
//importing motion
import { motion } from 'framer-motion'
export default function Testimonials() {

  const [selected,setselected]=useState(0)
  const testilength=testimonialsData.length

  const transition={type:'spring',duration:3}
  return (
    <div className='testimonials' id='testimonials'>
        <div className='left-t'>
           <span>Testimonials</span>
           <span className='stroke-text'>What they Say</span>
           <span>About Us</span>
           <motion.span
           key={selected}
           initial={{opacity:0,x:-100}}
           animate={{opacity:1,x:0}}
           exit={{opacity:0,x:100}}
           transition={transition}
           >
             {
                testimonialsData[selected].review
             }
           </motion.span>
           <span>
             <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
           </span>
        </div>
        <div className='right-t'>
           <motion.div 
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={transition}
           ></motion.div>

           <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={transition}
           ></motion.div>
           
           <motion.img 
           key={selected}
           initial={{opacity:0,x:100}}
           animate={{opacity:1,x:0}}
           exit={{opacity:0,x:-100}}
           transition={transition}
           src={testimonialsData[selected].image} alt=''></motion.img>

          <div className='arrowes'>
             <img onClick={()=>{
               (selected===0)?setselected(testilength-1):setselected(selected-1)
             }} src={LeftArrow} alt=''></img>
             <img onClick={()=>{
              (selected===testilength-1)?setselected(0):setselected(selected+1)
             }} src={RightArrow} alt=''></img>
          </div>
        </div>
    </div>
  )
}
