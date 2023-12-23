import React from 'react'

//import data
import { plansData } from '../../data/plansData'
//import image
import WhiteTick from '../../assets/whiteTick.png'

import './plans.css'
export default function Plans() {
  return (
    <div className='plans-container' id='plans'>
       <div className='blur plans-blur-1'></div>
       <div className='blur plans-blur-2'></div>
       <div className='programs-header' style={{gap:"2rem"}}>
         <span className='stroke-text'>READY TO START</span>
         <span>YOUR JOURNEY</span>
         <span className='stroke-text'>WITH US</span>
       </div>

       <div className='plans'>
          {
            plansData.map((plan,i)=>(
                <div className='plan'>
                   {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                      {
                        plan.features.map((feature,i)=>(
                            <div className='feature' key={i}>
                              <img src={WhiteTick} alt=''></img>
                              <span key={i}>{feature}</span>
                            </div>
                        ))
                      }
                    </div>

                    <div>
                     <span>See more benefits</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))
          }
       </div>
    </div>
  )
}
