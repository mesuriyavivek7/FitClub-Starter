import React from 'react'
import './programs.css'

//import images
import RightArrow from '../../assets/rightArrow.png'

//import programs data
import {programsData} from '../../data/programsData';

export default function Programs() {
  return (
    <div className='programe' id='programs'>
        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='programs-category'>
            {
                programsData.map((programe)=>(
                    <div className='category'>
                        {programe.image}
                        <span>{programe.heading}</span>
                        <span>{programe.details}</span>
                        <div className='join-now'>
                          <span>Join Now</span>
                          <img src={RightArrow} alt=''></img>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
