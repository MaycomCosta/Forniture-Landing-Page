import styled from 'styled-components'

export const ContainerTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vw;
  margin-bottom: 10vw;
`
export const ContainerTestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContainerTestimonialImg = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 50px;
`
export const Reviews = styled.div`

display: flex;
flex-direction: column-reverse;
text-align: center;
align-items: center;

height: 476px;
width: 370px;

.profilePhoto {
  width: 100px;
  height: 50px;
}
.starsReview {
  width: 100px;
  height: 50px;
}

.photoEdit{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.reviewDiv {
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;


  height: 15em;
  width: 20em;


  .reviewText {
    color: #1E1E1E;
    font-size: 14px;
    line-height: 16px;
    opacity: 0.8;
    font-weight: none;
    margin: 0 3em;
  }

  .jobTitle {
    font-size: 12px;
    line-height: 14px;
    opacity: 0.6;
    margin-bottom: 0;
    font-weight: none;
  }

  .name {
    font-size: 16px;
  }
}



`

// export const Div = styled.div`
// `