import React from 'react'
import * as C from './styles'
import { BiShoppingBag } from 'react-icons/bi'
import { CgArrowLongRight } from 'react-icons/cg'

export const Header = () => {
  return (
    <>
    <C.HeaderContainer>
      <C.Nav>
        <h4>Panto</h4>
        <C.ContainerItens>
          <ul>
            <a href="#Container" ><li>Furniture</li> </a>
            <a href="#AboutMe"><li>Shop</li></a>
            <a href="#Projects"><li>About Us</li></a>
            <a href="#Footer"><li>Contact</li></a>
          </ul>
        </C.ContainerItens>
        <C.BagButton><BiShoppingBag /></C.BagButton>
      </C.Nav>
      <C.SectionBigLetters>
        <h1>Make your interior more minimalistic & modern</h1>
        <h2>Turn your room with panto into a lot more minimalist<br/> and modern with ease and speed</h2>
        <input placeholder='Search furniture' />
      </C.SectionBigLetters>
    </C.HeaderContainer>
    <C.WhyChoseUs>
      <h2>Why Choosing Us</h2>
      <C.DivItens>
      <h3>Luxury facilities</h3>
      <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
      <a href="#A">More info <CgArrowLongRight /></a> 
      </C.DivItens>
      <C.DivItens>
      <h3>Affordable Price</h3>
      <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
      <a href="#A">More info <CgArrowLongRight /></a> 
      </C.DivItens>
      <C.DivItens>
      <h3>Many Choices</h3>
      <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
      <a href="#A">More info <CgArrowLongRight /></a> 
      </C.DivItens>
    </C.WhyChoseUs>
    </>
  )
}


