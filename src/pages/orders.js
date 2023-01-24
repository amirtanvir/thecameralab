import Header from '@/components/header'
import { useSession, getSession } from 'next-auth/react'
import React from 'react'
import moment from 'moment'
import db from "../../firebase"
import Order from '@/components/order'

const Orders = ({ orders }) => {

    const {data: session} = useSession();

  return (
    <div>
        <Header />
        <main className='bg-white max-w-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your Orders</h1>
            {session ? ( <h2>{orders.length} orders</h2> ) : ( <h2>Please sign in to see your orders</h2> )}

            <div>
                {orders?.map(({ amount, id, items, timestamp }) => (
                    <Order key={id} amount={amount} items={items} timestamp={timestamp} />
                ))}
            </div>

        </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`)

    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        }
    }

    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp','desc')
        .get();

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    )
    return {
        props: {
            orders,
        }
    }
}