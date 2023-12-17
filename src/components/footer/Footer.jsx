import React from 'react'

//import images
import Github from '../../assets/github.png'
import Insta from '../../assets/instagram.png'
import Linked from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

import './footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
       <hr/>
       <div className='footer'>
         <div className='social-links'>
           <img src={Github} alt=''></img>
           <img src={Insta} alt=''></img>
           <img src={Linked} alt=''></img>
         </div>
    
         <div className='logo-f'>
           <img src={Logo} alt=''></img>
         </div>
       </div>
       <div className='blur footer-blur-1'></div>
       <div className='blur footer-blur-2'></div>
    </div>
  )
}
