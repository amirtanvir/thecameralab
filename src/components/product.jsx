import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'

const Product = ({ id, title, price, description, category, image, rating }) => {
  
  
    return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        
        <p className='absolute top-2 right-2 italic text-xs'>{category}</p>
        
        <Image key={id} alt={title} src={image} width={200} height={200} />
        
        <h4>{title}</h4>

        <div className='flex'>
            {Array(rating).fill().map((_,i) => (
                <div key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EACE09" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                </div>

            ))}
        </div>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>

        <p className='mb-5'>£{price}</p>
                
        <button className='mt-auto button' >Add to basket</button>
    </div>
  )
}

export default Product