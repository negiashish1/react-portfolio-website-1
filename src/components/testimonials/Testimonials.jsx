import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules 
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/swiper.min.css';
// import 'swiper/css/pagination';
import 'swiper/modules/pagination/pagination.min.css';

const data = [
  {
    avatar: AVTR1,
    name: 'Goofi Frank',
    review: 'Shivani is such a lovely and passionate partner. I can\'t thank my destiny enough for finding me such a perfect partner. She is silly sometimes but thats the way she is and thats the most intimidating characteristic of hers. I love her.'            
  },
  {
    avatar: AVTR2,
    name: 'Sean Jones',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum mollitia quibusdam deserunt pariatur consectetur aut culpa modi quis suscipit natus sint sed, sequi aliquid ex.'            
  },
  {
    avatar: AVTR3,
    name: 'Ashish Negi',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum mollitia quibusdam deserunt pariatur consectetur aut culpa modi quis suscipit natus sint sed, sequi aliquid ex.'            
  },
  {
    avatar: AVTR4,
    name: 'Reviewer',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum mollitia quibusdam deserunt pariatur consectetur aut culpa modi quis suscipit natus sint sed, sequi aliquid ex.'            
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients & Peers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key= {index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>


    </section>
  )
}

export default Testimonials