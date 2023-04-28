import styled from 'styled-components'

export const SectionBuys = styled.section`
  background: #F7F7F7;
  height: 906px;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: 50px;
    text-align: center;
    font-size: 40px;
  }

  a {
    text-decoration: none;
    color: #E58410;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 60px;

    :hover {
      opacity: 0.7;
      transition: 0.3s;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* gap: 10px; */
  border-radius: 30px;

  margin: 30px auto 0 auto;
  max-width: 10vw;
  height: 40px;
  
  background-color: #eeeeee;
  padding: 0.2em 1.5em;

  .buttons {
    background-color: transparent;
    color: #1E1E1E;
    
    border: none;
    cursor: pointer;
    border-radius: 30px;
    padding: 0.2em 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;


   :hover {
    background-color: #ffffff;
   }
  }
`
export const SectionProduct = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 40px;
  align-items: center;

  img {
    width: 10vw;
    height: 15vw;
    background-color: #FAFAFA;
  }

  p {
    font-size: 15px;
    color: #8D8D8D;
    margin-top: 5px;
    font-weight: lighter;
    margin-bottom: 0;
  }

  h3 {
    font-weight: normal;
  }

  .backgroundColor {
    background-color: #ffffff;
    border-radius: 0 0 20px 20px;

    display: flex;
    flex-direction: column;
    padding: 0 20px 0 20px;
  }

  .priceButton {
    display: flex;
    margin: 35px 0 35px 0;
    justify-content: space-between;
    align-items: center;
  }
  
  .price {
    color: #0D1B39;
  }

  .stars {
    width: 100px;
    height: 30px;
    background: none;
  }

  button {
    border: none;
    background: none;
    margin: 0;
    font-size: 40px;
    cursor: pointer;

    display: flex;
    align-items: center;
  }
`
export const Product = styled.div`
`
// export const Div = styled.div`
// `