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
               in here we will help you to shape and build your ideal body and living up your life to fullest
             </div>
           </div>
        </div>
        <div className='right-h'>
           right side
        </div>
    </div>
  )
}
