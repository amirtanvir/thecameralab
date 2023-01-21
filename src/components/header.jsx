import React from 'react'
import Image from "next/image"
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import cameralablogo from '../assets/cameralabs-orange.png'

const Header = () => {
  return (
    <header>
        <div className='flex items-center bg-deepblue p-1 flex-grow py-2'>
            <div className='pb-1 pt-1 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    src={cameralablogo}
                    width={70}
                    height={70}
                    className='cursor-pointer px-4 hover:opacity-70'
                />
            </div>

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-blue-400 hover:bg-lightblue'>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                <MagnifyingGlassIcon className='h-12 p-4'/>
            </div>

            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>

                <div className='link'>
                    <p>Hello, Amir Tanvir</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>

                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>

                <div className='relative link flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-lightblue text-center rounded-full text-black font-bold'>0</span>
                    <ShoppingCartIcon className='h-10' />
                    <p className='font-extrabold md:text-sm md:inline hidden mt-2'>Basket</p>
                </div>

            </div>

        </div>

        <div className='flex items-center bg-lightblue text-white text-sm space-x-4 p-2 pl-6'>
            <p className='link flex items-center'>
                <Bars3Icon className='h-6 mr-1' />
                All
            </p>
            <p className='link'>Today's Deals</p>
            <p className='link'>Drones</p>
            <p className='link'>Cameras</p>
            <p className='link hidden lg:inline-flex'>Accessories</p>
            <p className='link hidden lg:inline-flex'>Green Screens</p>
        </div>
        
    </header>
  )
}

export default Header