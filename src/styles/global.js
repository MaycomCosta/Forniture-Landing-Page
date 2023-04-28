
import { createGlobalStyle } from "styled-components"


const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
    background-color: #FFFFFF
  }

  h2 {
    font-size: 42px;
    line-height: 49px;
    text-transform: capitalize;
    color: #1E1E1E;
    margin: 20px 0;
  }

  h4 {
    color: #E58410;
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 20px;
  }

  p {
    color: #1E1E1E;
    margin-bottom: 20px;
    line-height: 33px;
    font-weight: lighter;
  }

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
`

export default Global