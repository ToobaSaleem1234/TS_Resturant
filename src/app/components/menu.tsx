import React from 'react'
import Image from 'next/image';


const products = [
  {
    id:1,
    title:"Zinger Burger",
    category:"Crunchy",
    price:350.00,
    image:"/menu/zingerburger.jpg",
    bgColor:"bg-teal-500"
  },
  {
    id:2,
    title:"Paratha Roll",
    category:"Delicious",
    price:250.00,
    image:"/menu/roll.jpeg",
    bgColor:"bg-amber-500"
  },
  {
    id:3,
    title:"Fried Chicken",
    category:"Crispy",
    price:200.00,
    image:"/menu/chicken.jpeg",
    bgColor:"bg-teal-500"
  },
  {
    id:4,
    title:"Club Sandwich",
    category:"Healthy",
    price:350.00,
    image:"/menu/sandwiches.jpeg",
    bgColor:"bg-amber-500"
  },
  {
    id:5,
    title:"Chowmein",
    category:"Juicy",
    price:300.00,
    image:"/menu/chowmein.jpg",
    bgColor:"bg-teal-500"
  },
  {
    id:6,
    title:"Shashlik With Fried Rice",
    category:"Spicy",
    price:500.00,
    image:"/menu/shashlik.jpg",
    bgColor:"bg-amber-500"
  },
  {
    id:7,
    title:"Fruit Trifle",
    category:"Fruit Fiesta",
    price:700.00,
    image:"/menu/trifle.jpeg",
    bgColor:"bg-teal-500"
  },
  {
    id:8,
    title:"Ice-cream",
    category:"Chilly Treats",
    price:350.00,
    image:"/menu/ice-cream.jpeg",
    bgColor:"bg-amber-500"
  },
  {
    id:9,
    title:"Kheer",
    category:"Creamy Delights",
    price:500.00,
    image:"/menu/kheer.jpeg",
    bgColor:"bg-teal-500"
  },
]
const Menu = () => {
  return (
    <div className='p-1 flex flex-wrap items-center justify-center my-24 gap-20'>
      {products.map((products)=>(
        <div key={products.id} className={`flex shrink-0 m-6 relative flex-col overflow-hidden ${products.bgColor} rounded-lg shadow-lg group max-w-sm`}>
          <svg 
          className='absolute bottom-0 left-0 mb-2 scale-150 group:hover:scale-[1.65] transition-transform' 
          viewBox='0 0 375 283' 
          fill='none'
          style={{opacity:0.1}}>
            
            <rect 
            x="159.52" 
            y="152" 
            height="152" 
            width="152" 
            rx="8" 
            transform="rotate(-45 159.52 175)" 
            fill='white'/>

            <rect 
            y="107.48" 
            height="152" 
            width="152" 
            rx="8" 
            transform="rotate(-45 0 107.48)" 
            fill='white'/>
          </svg>
          
          <div className='relative p-10 pb-5 flex items-center justify-center group-hover:scale-110 transition-transform'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
            style={
              {
                background:"radial-gradient(black, transparent 50%)",
                transform:"rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity:0.2,
              }
            }
            >  
            </div>
            <Image className='relative w-72 h-56'
            src={products.image} 
            alt={products.title}
            width={400}
            height={400} />
          </div>

           <div className='relative text-white pl-10 text-2xl capitalize tracking-wider font-semibold'>
            <span className='block opacity-75'>{products.category}</span>

            <div className='flex justify-between'>
              <span className='block font-semibold text-2xl pt-2'>{products.title}</span>
              </div>
              <span className='bg-white rounded-full text-orange-600 hover:text-orange-300 text-md font-semibold px-4 py-2 block leading-none items-center w-56 text-center my-5'>Rs.{products.price}</span>
              
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu