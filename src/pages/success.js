import Header from '@/components/header'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import React from 'react'

const Success = () => {
    const router = useRouter();
  return (
    <div className='h-screen '>
        <Header />
        <main>

        <div className='flex flex-col p-10 bg-white mx-auto'>
            <div className='flex items-center space-x-2 mb-5'>
                <CheckCircleIcon className='text-green-500 h-10' />
                <h1 className='text-3xl'>Your order has been confirmed</h1>
            </div>
            <p>Thank you for placing your order!</p>
            <button className='button mt-8' onClick={() => router.push('/orders')}>Go to my orders</button>
        </div>
        

        </main>
    </div>
  )
}

export default Success