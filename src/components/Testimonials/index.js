import React from 'react'
import * as C from './styles'

import { review } from '../../data/data'

export const Testimonials = () => {
  return (
    <C.ContainerTestimonial>
    <C.ContainerTestimonialInfo>
      <h4>Testimonials</h4> 
      <h2>Our Client Reviews</h2>
    </C.ContainerTestimonialInfo>
    <C.ContainerTestimonialImg>
    {review.map(re => {
        return (
          <C.Reviews key={re.id} style={{ backgroundImage: `url(${re.img})` }}>
          {/* <img className='background' src={re.img} alt='background'/> */}
          <div className='reviewDiv' key={re.id}>
            <div className='photoEdit'>
            <img className='profilePhoto' src={re.proImg} alt={re.name}/>
            </div>
            <h5 className='name'>{re.name}</h5>
            <p className='jobTitle'>{re.job}</p>
            <p className='reviewText'>{re.review}</p>
            <img className='starsReview' src={re.stars} alt='review in starts'/>
          </div>
          </C.Reviews>
        )
      })}
    </C.ContainerTestimonialImg>
    </C.ContainerTestimonial>
  )
}


