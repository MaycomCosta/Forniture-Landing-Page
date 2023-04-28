import styled from 'styled-components'

export const Footer = styled.footer`

  background: #F7F7F7;
  height: 462px;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
    
nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

a {
  margin: 0;
  font-size: 13px;
  color: #1E1E1E;
}

p {
  font-size: 13px;
  margin-top: 20px;
  opacity: 0.8;
  line-height: 1.5em;
}

h4 {
  font-size: 20px;
  color: #1E1E1E;
}
h5 {
  font-weight: 400;
  line-height: 22px;
  color: #F6973F;
  opacity: 0.8;
}

  .containerStyle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`
export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;
export const Containers = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vw;
`;
export const ContainerPublicity = styled.div`
`
export const ContainerServices = styled.div`
`
export const ContainerFurniture = styled.div`
`
export const ContainerFollowUs = styled.div`
`
export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-around;

  h5 {
    color: #1E2833;
    opacity: 0.5;
  }
`;
// export const Div = styled.div`
// `