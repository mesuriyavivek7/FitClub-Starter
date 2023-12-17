import React from 'react'

import './reasons.css'

//import images
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Tick from '../../assets/tick.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'


export default function Reasons() {
  return (
    <div className='reasons' id='reasons'>
        <div className='left-r'>
            <img src={Image1} alt=''></img>
            <img src={Image2} alt=''></img>
            <img src={Image3} alt=''></img>
            <img src={Image4} alt=''></img>
        </div>
        <div className='right-r'>
           <span>Some Reasons</span>

           <div>
            <span className='stroke-text'>Why</span>
            <span>  choose us?</span>
           </div>

           <div className='details-r'>
             <div>
               <img src={Tick} alt=''></img>
               <span>OVER 140+ EXPERTS COACH</span>
             </div>
             <div>
               <img src={Tick} alt=''></img>
               <span>TRAINER SMARTER AND FASTER THAN BEFORE</span>
             </div>
             <div>
               <img src={Tick} alt=''></img>
               <span>1 FREE PROGRAME FOR NEW MEMBER</span>
             </div>
             <div>
               <img src={Tick} alt=''></img>
               <span>RELAIBLE PARTNERS</span>
             </div>
             
           </div>
         <span style={{
          fontWeight:"normal",
          color:"var(--gray)"
         }
         }>OUR PARTNERS</span>
         
         <div className='partners'>
           <img src={adidas} alt=''></img>
           <img src={nb} alt=''></img>
           <img src={nike} alt=''></img>
         </div>

        </div>
    </div>
  )
}
