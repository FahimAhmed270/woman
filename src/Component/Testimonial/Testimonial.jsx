import React from 'react'
import './Testimonial.css'
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="test-wrapper">
        <div className="test-container">
          <span>TOP RATED</span>
          <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
        </div>
        <img src={Hero} alt="" />
        <div className="test-container">
          <span>100K</span>
          <span>HAPPY CUSTOMERS WITH US</span>
        </div>
      </div>
      <div className="review">Reviews</div>
      <div className="carousal">
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        className='review-slides'
        breakpoints={{
          1200:{
            slidesPerView:4
          },
          1000:{
            slidesPerView:3
          },
          768:{
            slidesPerView:2
          },
          360:{
            slidesPerView:1
          },
          0:{
            slidesPerView:1
          }
        }}
        >
          {
            TestimonialsData.map((test, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="test">
                    <img src={test.image} alt="" />
                    <span>{test.comment}</span>
                    <hr />
                    <span>{test.name}</span>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
