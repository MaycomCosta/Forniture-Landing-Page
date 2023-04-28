import React from 'react'
import * as C from './styles'

import expMainImg from '../../assets/expMainImg.svg'

import { CgArrowLongRight } from 'react-icons/cg'

export const Experience = () => {
  return (
    <C.ContainerExperience>
    <C.ContainerExperienceImg>
      <img className='mainImg' src={expMainImg} alt='img'/>
    </C.ContainerExperienceImg>
    <C.ContainerExperienceInfo>
      <h4>Experience</h4> 
      <h2>we provide you the best experience</h2>
      <p>
      You don't have to worry about the result because all of these interiors 
      are made by people who are professionals in their fields with an elegant 
      and lucurious style and with premium quality materials
      </p>
      <a href="#A">More info<CgArrowLongRight /></a> 
    </C.ContainerExperienceInfo>
    </C.ContainerExperience>
  )
}
