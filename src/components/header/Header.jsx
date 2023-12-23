import React, { useState } from 'react'
import './header.css'


import { Link } from 'react-scroll'
//import images
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'


export default function Header() {
  const mobile=window.innerWidth<=768?true:false
  const [menuOpened,setMenuOpened]=useState(false)
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo'></img>

      {(menuOpened===false && mobile===true)?
       (<div className='bars' onClick={()=>setMenuOpened(true)}><img src={Bars} alt='' style={{width:'1.5rem', height:'1.5rem'}}></img></div>):
       <ul className='header-menu'>
        <li><Link
         onClick={()=>setMenuOpened(false)}
         to='home'
         spy={true}
         smooth={true}
         >Home</Link></li>

        <li><Link 
        onClick={()=>setMenuOpened(false)}
        to='programs'
        spy={true}
        smooth={true}
        >Programs</Link>
        </li>

        <li>
        <Link 
        onClick={()=>setMenuOpened(false)}
        to='reasons'
        spy={true}
        smooth={true}
        >Why us</Link>
        </li>

        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='plans'
        spy={true}
        smooth={true}
        >Plans</Link>
        </li>

        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='testimonials'
        spy={true}
        smooth={true}
        >Testimonials</Link>
       </li>

      </ul>
      }

      
    </div>
  )
}
