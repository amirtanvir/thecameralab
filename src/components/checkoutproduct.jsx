import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '@/slices/basketSlice'

const CheckoutProduct = ({ id, title, price, rating, description, category, image }) => {

    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
  return (
    <div className='grid grid-cols-5 '>
        <Image alt={title} src={image} height={200} width={200} style={{objectFit:"contain"}} /> 
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
            {Array(rating).fill().map((_,i) => (
                <div key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EACE09" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                </div>
            ))}
        </div>
        <p className='text-xs mt-2 line-clamp-3'>{description}</p>
        <p>£{price}</p>
        </div>

        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct