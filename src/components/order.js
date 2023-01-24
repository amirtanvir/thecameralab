import React from 'react'
import moment from 'moment'

const Order = ({ amount, id, items, timestamp }) => {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-10 p-5 bg-gray-100 text sm text-gray-600'> 
            <div>
                <p className='font-bold text-xs'>ORDER PLACED</p>
                <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
            </div>
        <div className='font-bolt '>
            <p className='text-xs font-bold'>TOTAL</p>
                <p>£{amount}</p>
        </div>


        </div>


    </div>
  )
}

export default Order