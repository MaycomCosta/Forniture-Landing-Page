import styled from 'styled-components'
import HomePhoto from '../../assets/home.svg'

export const HeaderContainer = styled.header`
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 86.13%, #FFFFFF 100%), url(${HomePhoto});
height: 1084px;
width: 1440px;
margin: 0 auto;
`
export const Nav = styled.nav`
  height: 105px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h4 {
  font-size: 28px;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #FFFFFF;
  }


`
export const ContainerItens = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }

  a {
    display: block;
    text-decoration: none;
    color: #FFFFFF;
    padding: 10px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;

    :hover {
        color: gray;
        transition: 0.3s;
    }
  }

`
export const BagButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;

  :hover {
        color: gray;
        transition: 0.3s;
    }
`
export const SectionBigLetters = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;

  margin: 90px 290px 0 290px;

  h1 {
    font-size: 70px;
    text-align: center;
  }
  h2 {
    font-size: 18px;
    text-align: center;
    line-height: 16px;
    font-weight: lighter;
    line-height: 30px;
    opacity: 0.8;
    color: #ffffff;
  }

  input {
    background: rgba(255, 255, 255, 0.15);
    border: 0.861538px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);

    width: 344px;
    height: 56px;
    border-radius: 42px;

    padding-left: 20px;
    margin-top: 35px;
    color: #ffffff;
    font-size: 16px;
    

    ::placeholder {
    color: #ffffff;
    font-weight: lighter;
    opacity: 0.8;
    font-size: 14px;

  }

  &:focus {
    outline: none;
  }
  }
`
export const WhyChoseUs = styled.section`
    height: 400px;
    width: 1440px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;


    h2 {
        margin-right: 150px;
        font-size: 30px;
        font-weight: bold;
        padding-left: 30px;
    }
`
export const DivItens = styled.div`
    gap: 25px;
    display: flex;
    flex-flow: column nowrap;

    a {
        text-decoration: none;
        color: #E58410;
        display: flex;
        gap: 10px;
        align-items: center;

        :hover {
          opacity: 0.7;
          transition: 0.3s;
        }
    }

    p {
        font-weight: lighter;
        opacity: 0.8;
    }
`
// export const Div = styled.div`
// `