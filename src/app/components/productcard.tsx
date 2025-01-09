
import { Product } from './types'
import React from 'react'
import Image from 'next/image'

interface ProductCardProps extends Product{
  onAddToCart:(product : Product) =>void;
}
const Productcard:React.FC<ProductCardProps>=({
  id,
  title,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className='bg-white p-4 rounded shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
      <Image 
      src={image} 
      alt={title}
      width={400}
      height={400}
      className='w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out' />
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-xl text-slate-600 mb-4 '>Rs.{price}</p>
      <button onClick={() =>onAddToCart({id, title , price , image})} className='bg-orange-400 text-white px-4 rounded-lg text-xl shadow-md hover:bg-orange-200 transition duration-300 ease-in-out'>
        Add to Cart
      </button>
    </div>
  );
};

export default Productcard;