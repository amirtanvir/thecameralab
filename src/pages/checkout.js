import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/slices/basketSlice'
import CheckoutProduct from '@/components/checkoutproduct'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {

    const items = useSelector(selectItems)
    const { data: session } = useSession();
    const total = useSelector(selectTotal)
    
    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post('/api/create-checkout-session', 
        {
            items: items,
            email: session.user.email
        })

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

    }

  return (
    <div className='bg-gray-100'>
        <Header />

        <main className='lg:flex lg:max-w-screen-2xl mx-auto '>
            {/* Left */}
            <div className='flex-grow m-5 shadow-sm'>

                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                    {items.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}
                    </h1>

                    {items.map((item, i) => (
                        <CheckoutProduct 
                            key={i}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            category={item.category}
                            image={item.image}
                        />
                    ))}
                        
                </div>
            </div>
            
            {/* Right */}
            <div className='flex flex-col bg-white p-5 shadow-md'>
                {items.length > 0 && (
                    <>
                    <h2 className='whitespace no-wrap text-sm'>Subtotal ({`${items.length} ${items.length == 1 ? 'item' : 'items'}`})
                    <span className='font-bold'>£{total}</span>
                    </h2>
                    <button onClick={createCheckoutSession} disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>{!session ? 'Sign in to checkout':'Proceed to checkout'}</button>
                    </>
                )}
            </div>


        </main>
    
    </div>
  )
}

export default Checkout