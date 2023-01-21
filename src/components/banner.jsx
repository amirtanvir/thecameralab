import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import canonad from '../assets/canonad.jpg'
import djiad from '../assets/djiad.jpg'
import djiad2 from '../assets/djiad2.jpg'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative'>

        <div className='absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20' />

        <Carousel autoPlay infiniteLoop 
        showStatus={false} 
        showIndicators={false}
        showThumbs={false}>
            
            <div>
                <Image alt="Canon Camera Advertisement" src={canonad} width={1500} height={600} />
            </div>
            <div>
                <Image alt="DJI Advertisement" src={djiad} width={1500} height={600} />
            </div>
            <div>
                <Image alt="DJI Advertisement 2" src={djiad2} width={1500} height={600} />
            </div>

        </Carousel>
        

    </div>
  )
}

export default Banner