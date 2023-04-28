import React from 'react'
import * as C from './styles'
import { AiFillPlusCircle } from 'react-icons/ai'
import { CgArrowLongRight } from 'react-icons/cg'
import { product } from '../../data/data'

export const Buy = () => {
  return (
    <C.SectionBuys>
        <h2>Best Selling Product</h2>
        <C.ContainerButtons>
          <button className='buttons'>Chair</button>
          <button className='buttons'>Beds</button>
          <button className='buttons'>Sopa</button>
          <button className='buttons'>Lamp</button>
        </C.ContainerButtons>
        <C.SectionProduct>
        {product.map(pro => {
        return (
          <C.Product key={pro.id}>
          <img src={pro.img} alt={`Chair ${pro.title}`}/>
          <div className='backgroundColor'>
          <p className='category'>{pro.category}</p>
          <h3 className='productName'>{pro.title}</h3>
          <img className='stars' src={pro.stars} alt='stars'/>
          <div className='priceButton'>
          <h4 className='price'>{`$ ${pro.price}`}</h4>
          <button className='addButton'><AiFillPlusCircle/></button>
          </div>
          </div>
          </C.Product>
        )
      })}
        </C.SectionProduct>
        <a href="#A">View All<CgArrowLongRight /></a> 
    </C.SectionBuys>
  )
}
