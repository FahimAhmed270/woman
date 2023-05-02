import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import data
import { SliderProducts } from '../../data/products'

const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation]}
                navigation={true}
                className='my-swiper'
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                grabCursor={true}
                breakpoints={{
                    768:{
                        slidesPerView:3
                    },
                    360:{
                        slidesPerView:1
                    }
                }}
            >
                {
                    SliderProducts.map((slide, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{slide.name}</span>
                                        <span>{slide.detail}</span>
                                    </div>
                                    <span>{slide.price}$</span>
                                    <div>shop now</div>
                                </div>
                                <img src={slide.img} alt="" className='product-image' />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default Slider


