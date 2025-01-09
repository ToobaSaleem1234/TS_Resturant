import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';

const Cart = () => {
    const desiImage = [
        "/cart/biryani.jpg",
        "/cart/nihari.webp",
        "/cart/daal-chawal.jpeg",
    ];
    const dessertImage = [
        "/cart/brownie.jpeg",
        "/cart/rabri-kheer.jpg",
        "/cart/carrot-halwa.jpg",
    ];
    const chineseImage = [
        "/cart/cutlets.jpg",
        "/cart/pulao.jpg",
        "/cart/soup.jpg",
    ];
    return (
        <div className='relative text-center p-10'>
            <div className='absolute inset-0'>
                <h1 className='font-bold text-5xl my-4 text-white underline underline-offset-8 cursor-pointer tracking-wider text-center'>Most Requested Items</h1>
                <h2 className='text-4xl font-semibold text-center my-9 '>Order Now!</h2>
                <h2 className='text-5xl font-semibold underline cursor-pointer tracking-wider pt-12 '>Desi Foods:</h2>
            </div>
            {/* desi food */}
            <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-y-20 gap-x-14  mb-5'
                id='Projects'
            >
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className='w-70 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative mt-72'
                        key={index}>

                        <a href="#">
                            <Image 
                            src={desiImage[index]} 
                            alt={`Product ${index + 1}`}
                            width={400}
                            height={400}
                                className='h-80 w-96 object-cover rounded-t-xl  '
                            />
                            <div className='px-4 py-3 w-72'>
                                <span className='text-slate-500 text-center uppercase text-md ml-8 my-3'>Our Speciality</span>
                                <p className='text-xl font-bold text-orange-600 truncate block capitalize ml-9 mt-2'>Desi Food {index + 1}</p>
                                <div className='flex gap-1'>
                                    <p className='text-lg font-semibold text-orange-300 mt-2 ml-6 cursor-pointer'>Rs.650.00</p>
                                    <span className='text-lg text-black ml-6 cursor-pointer line-through mt-2 '>Rs.950.00</span>
                                    <span className='ml-6 mt-2 text-orange-600'>
                                        <FaShoppingCart size={20} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
            {/* chinese food */}
            <h2 className='text-5xl font-semibold underline cursor-pointer tracking-wider pt-32 '>Chinese Foods:</h2>
            <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-y-20 gap-x-14 mt-10 mb-5'
                id='Projects'
            >
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className='w-70 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative'
                        key={index}>
                        <a href="#">
                            <Image 
                            src={chineseImage[index]} 
                            alt={`Product ${index + 1}`}
                            width={400}
                            height={400}
                                className='h-80 w-96 object-cover rounded-t-xl'
                            />
                            <div className='px-4 py-3 w-72'>
                                <span className='text-slate-500 text-center uppercase text-md ml-8 my-3'>Our Speciality</span>
                                <p className='text-xl font-bold text-orange-600 truncate block capitalize ml-9 mt-2'>Chinese Food {index + 1}</p>
                                <div className='flex gap-1'>
                                    <p className='text-lg font-semibold text-orange-300 mt-2 ml-6 cursor-pointer'>Rs.1050.00</p>
                                    <span className='text-lg text-black ml-6 cursor-pointer line-through mt-2 '>Rs.1250.00</span>
                                    <span className='ml-6 mt-2 text-orange-600'>
                                        <FaShoppingCart size={20} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}

            </section>

            {/* desserts */}
            <h2 className='text-5xl font-semibold underline cursor-pointer tracking-wider pt-12 '>Desserts:</h2>
            <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-y-20 gap-x-14 mt-10 mb-5'
                id='Projects'
            >
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className='w-70 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative mt-6'
                        key={index}>
                        <a href="#">
                            <Image 
                            src={dessertImage[index]} 
                            alt={`Product ${index + 1}`}
                            width={400}
                            height={400}
                                className='h-80 w-96 object-cover rounded-t-xl'
                            />
                            <div className='px-4 py-3 w-72'>
                                <span className='text-slate-500 text-center uppercase text-md ml-8 my-3'>Our Speciality</span>
                                <p className='text-xl font-bold text-orange-600 truncate block capitalize ml-9 mt-2'>Dessert {index + 1}</p>
                                <div className='flex gap-1'>
                                    <p className='text-lg font-semibold text-orange-300 mt-2 ml-6 cursor-pointer'>Rs.750.00</p>
                                    <span className='text-lg text-black ml-6 cursor-pointer line-through mt-2 '>Rs.850.00</span>
                                    <span className='ml-6 mt-2 text-orange-600'>
                                        <FaShoppingCart size={20} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Cart