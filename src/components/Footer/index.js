import React from 'react'
import * as C from './styles'

export const Footer = () => {
  return (
    <C.Footer>
      <C.Containers>
        <C.ContainerPublicity>
        <h4>Panto</h4>
        <p>The advantage of hiring a workspace with<br/>
          us is that givees you comfortable service<br/>
            and all-around facilities.</p>
        </C.ContainerPublicity>
        <C.ContainerServices className='containerStyle'>
          <h5>Services</h5>
          <nav>
          <C.FooterLink href="#">Email Marketing</C.FooterLink>
          <C.FooterLink href="#">Campaigns</C.FooterLink>
          <C.FooterLink href="#">Branding</C.FooterLink>
          </nav>
        </C.ContainerServices>
        <C.ContainerFurniture className='containerStyle'>
          <h5>Furniture</h5>
          <nav>
          <C.FooterLink href="#">Beds</C.FooterLink>
          <C.FooterLink href="#">Chair</C.FooterLink>
          <C.FooterLink href="#">All</C.FooterLink>
          </nav>
        </C.ContainerFurniture>
        <C.ContainerFollowUs className='containerStyle'>
          <h5>Follow Us</h5>
          <nav>
          <C.FooterLink href="#">Facebook</C.FooterLink>
          <C.FooterLink href="#">Twitter</C.FooterLink>
          <C.FooterLink href="#">Instagram</C.FooterLink>
          </nav>
        </C.ContainerFollowUs>
      </C.Containers>
      <C.CopyrightContainer>
      <h5 className='copyright'>Copyright © 2023</h5>
      <C.FooterLink href="#">Terms & Conditions</C.FooterLink>
      <C.FooterLink href="#">Privacy Policy</C.FooterLink>
      </C.CopyrightContainer>
      </C.Footer>
  )
}


