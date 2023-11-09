import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Banner() {

  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={2000} >

        <div className='slide'>
          <h1>Namangandan Toshkentga tezkor taksi xizmatiga xush kelibsiz.</h1>
        </div>
        <div className='slide'>
          <h1>Toshkentdan Namanganga tezkor taksi xizmatiga xush kelibsiz.</h1>
        </div>



      </Carousel>
    </div>
  )
}

export default Banner