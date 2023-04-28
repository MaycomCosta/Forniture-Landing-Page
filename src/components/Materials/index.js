import React from 'react'
import * as C from './styles'

import { CgArrowLongRight } from 'react-icons/cg'


import materialsImg1 from '../../assets/materialsImg1.svg'
import materialsImg2 from '../../assets/materialsImg2.svg'
import materialsImg3 from '../../assets/materialsImg3.svg'

export const Materials = () => {
  return (
    <C.ContainerMaterials>
    <C.ContainerMaterialsInfo>
      <h4>Materials</h4> 
      <h2>Very serious materials for making furniture</h2>
      <p>
      Because panto was very serious about designing furniture for our environment,
      using a very expensive and famous capital but at a relatively low price
      </p>
      <a href="#A">More info<CgArrowLongRight /></a> 
    </C.ContainerMaterialsInfo>
    <C.ContainerMaterialsImg>
      <div className='separationDiv'>
      <img className='img1' src={materialsImg1} alt='img'/>
      <img className='img2' src={materialsImg2} alt='img'/>
      </div>
      <img className='img3' src={materialsImg3} alt='img'/>
    </C.ContainerMaterialsImg>
    </C.ContainerMaterials>
  )
}


