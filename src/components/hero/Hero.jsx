import React from 'react'
import './hero.css'
import Header from '../header/Header'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='left-h'>
          <Header></Header>

           <div className='the-best-ad'>
              <div className='emptydiv'></div>
              <span>the best fitness club in town</span>
           </div>
           <div className='hero-text'>
             <div>
                <span className='stroke-text'>Shape</span>
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
               <span>+140</span>
               <span>expert coaches</span>
             </div>
             <div>
               <span>+978</span>
               <span>member joined</span>
             </div>
             <div>
               <span>+50</span>
               <span>fitness programme</span>
             </div>
           </div>
           <div className='hero-buttons'>
             <button className='btn'>Get Started</button>
             <button className='btn'>Learn More</button>
           </div>
        </div>
        <div className='right-h'>
           right side
        </div>
    </div>
  )
}
