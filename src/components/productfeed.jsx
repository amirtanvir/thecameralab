import React from 'react'
import Product from './product'
import zhiyun from '../assets/products/zhiyun.jpg'
import djiom from '../assets/products/djiom.jpg'
import joilcantripod from '../assets/products/joilcantripod.jpg'
import greenscreen from '../assets/products/greenscreen.jpg'
import ndfilter from '../assets/products/ndfilter.jpg'
import ringlight from '../assets/products/ringlight.jpg'
import gopro from '../assets/products/gopro.jpg'
import Image from 'next/image'
import nikon from '../assets/nikon.jpg'


export const products = [{"id":1,
"title":"DJI OM 5",
"price":140.00,
"description":"DJI OM 5 is a lightweight and versatile tool that unlocks the full potential of your smartphone. Enjoy flawless selfies, super-smooth video, automatic tracking, and so much more with this DJI phone gimbal.",
"category":"Gimbals",
"image":djiom,
"rating":4},
{
"id":2,
"title":"Zhiyun Smooth 5",
"price":155.00,
"description":"Zhiyun Smooth 5 will be everything you love about filming with your smartphone. The 3-axis design allows movements in all angles to be amazingly smooth, even in extreme angles. Intuitive control panel partnering with ZY Cami makes every shot a breeze toward Professional level",
"category":"Gimbals",
"image":zhiyun,
"rating":5},
{
"id":3,
"title":"JOILCAN Camera Tripod",
"price":38.76,
"description":"The tripod for camera and phone has a HIGHER working height and a SMALLER storage size. Adjusted freely from 19.5 and 74 to meet your different height requirements",
"category":"Accessories",
"image":joilcantripod,
"rating":4},
{
"id":4,
"title":"NEEWER 58mm Fixed ND Filter Kit",
"price":24.99,
"description":"58MM Neutral Density ND2 /ND 4 /ND 8/ ND16 Filter, (1) Lens Pen, (1) Filter Pouch",
"category":"Accessories",
"image":ndfilter,
"rating":3},

{
"id":5,
"title":"LUXBURG Green Screen",
"price":185.00,
"description":"Dimentions 220x200 cm. Suitable for different height thanks to flexibly adjustable hydraulic scissor mechanism on the back. Ultra-quick deployment: set up and pack up in seconds",
"category":"Accessories",
"image":greenscreen,
"rating":5},

{
"id":6,
"title":"GoPro HERO10 Black",
"price":400.00,
"description":"All-out speed and ultimate ease come together in the most powerful GoPro ever, HERO10 Black. Ready for twice the performance? The revolutionary new GP2 chip shoots 5.3K video with double the frame rate¹, 23MP photos, enhanced low-light performance and bar-shattering HyperSmooth 4.0 video stabilization in all modes.",
"category":"Cameras",
"image":gopro,
"rating":5}
,
{
"id":7,
"title":"Neewer Ring Light",
"price":95.99,
"description":"Kit includes: (1)18 inches/48 centimeters Outer LED Ring Light Light+(1)61 inches/155 centimeters Light Stand+(1)Soft Tube+(1)White and Orange Color Filter Set+(1)Tripod Head Hot Shoe Adapter+(1)Bluetooth Receiver+(1)Universal Adapter with UK Plug+(1)Smart Phone Holder",
"category":"Accessories",
"image":ringlight,
"rating":5}
]

const ProductFeed = ( ) => {
    return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-20 mx-auto'>
        {products.slice(0,3).map(({id, title, price, category, description, image, rating}) => (
            <div key={id} >
                <Product key={id} price={price} title={title} description={description} 
                 rating={rating} category={category} image={image} />
            </div>
        ))}

        <Image alt="Bear swimming with fish - Nikon advertisement" className='md:col-span-full' src={nikon} width={1500} height={300}/>


        {products.slice(3,7).map(({id, title, price, category, description, image, rating}) => (
            <div key={id}>
                <Product key={id} price={price} title={title} description={description} 
                 rating={rating} category={category} image={image} />
            </div>
        ))}


    </div>
  )
}

export default ProductFeed