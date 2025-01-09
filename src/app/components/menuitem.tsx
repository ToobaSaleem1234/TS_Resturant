'use client'
import React from 'react'
import { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import Productcard from './productcard';
import { Product } from './types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Menuitem: React.FC = (): ReactNode => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);

    const router = useRouter()

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();

        // local storage
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart; // Correctly return the updated array
        });
    };


    // card visibility:
    const toggleCart = () => {
        setShowCart((prev) => !prev);
    };

    // checkout model
    const goToCheckout = () => {
        setIsCheckout(true);
    };

    // cart clear method
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <div className='relative min-h-screen py-6 my-6'>
            <div className='absolute inset-0 bg-cover bg-center opacity-10 animate-background '
                style={{
                    backgroundImage: "url('https://png.pngtree.com/background/20210706/original/pngtree-food-background-picture-image_83391.jpg')"
                }}>
            </div>
            <div className='relative z-10'>

                {/* headings */}
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h1 className='text-4xl font-bold text-white mb-4'>Delicious Menu</h1>
                    <p className='text-xl text-white'>
                        Explore our section of mouth watering food for order
                    </p>

                </div>

                {/* product section */}
                <div className='max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black'>
                    {products.map((product) => (
                        <Productcard
                            key={product.image}
                            {...product}
                            onAddToCart={addToCart}
                        />

                    ))}
                </div>

                {/* cart section */}
                <div className='max-w-6xl mx-auto mt-8'>
                    <button
                        onClick={toggleCart}
                        className='bg-orange-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-200 transition duration-300 ease-in-out '
                    >
                        {showCart ? 'Hide Cart' : 'View Cart'} ({cart.length} items)
                    </button>

                    {showCart && (
                        <div className='mt-6 bg-white p-6 rounded-lg shadow-lg'>
                            <h2 className='text-4xl font-bold mb-4 text-orange-400 '>Your Cart Items Included:</h2>
                            {cart.length > 0 ? (
                                <div>
                                    <ul>
                                        {cart.map((product, index) => (
                                            <li className='flex items-center justify-between mb-6 transition-all transform duration-300 ease-in-out '
                                                key={index}>
                                                <Image className='h-40 w-56 sm:w-48 inline-block transition-transform duration-300 ease-in-out text-black hover:scale-105'
                                                    src={product.image}
                                                    alt={product.title}
                                                    width={200}
                                                    height={200} />
                                                <span className='ml-4 text-2xl font-medium text-slate-600'>{product.title} - Rs.{product.price}</span>

                                            </li>

                                        ))};
                                    </ul>
                                    <div className='flex justify-between items-center mt-6 text-black'>
                                        <span className='font-semibold text-xl '>Total: Rs.{cart.reduce((total, product) => total + product.price, 0)}</span>

                                        <div>
                                            <button
                                                onClick={goToCheckout}
                                                className='bg-red-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-500 transition duration-300 ease-in-out text-white transform hover:scale-110'
                                            >
                                                Proceed To CheckOut
                                            </button>

                                            <button className='bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-500 transition duration-300 ease-in-out text-white transform hover:scale-110 ml-6 my-5'
                                                onClick={clearCart}
                                            >
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className='text-lg text-slate-600'> Your Cart is Empty</p>
                            )};
                        </div>
                    )}
                </div>

                {/* checkout section */}
                {isCheckout && (
                    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black'>
                        <div className='bg-white p-8 rounded-lg shadow-lg w-full sm:w-96'>
                            <h2 className='text-4xl font-bold text-orange-600 mb-4'>Checkout</h2>
                            <p className='text-lg text-red-800 '>Please confirm your order before proceeding</p>
                            <div className='mt-4'>
                                <ul>
                                    {cart.map((product, index) => (
                                        <li key={index} className='flex justify-between mb-4'>
                                            <span>{product.title}</span>
                                            <span>Rs.{product.price}</span>
                                        </li>
                                    ))};
                                </ul>
                                <div className='flex justify-between mt-4'>
                                    <span className='font-semibold'>Total: </span>
                                    <span className='font-semibold'>
                                        Rs.{cart.reduce((total, product) => total + product.price, 0)}
                                    </span>
                                </div>
                            </div>
                            <div className='mt-6 flex justify-between'>
                                <button
                                    onClick={() => setIsCheckout(false)}
                                    className='bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-500 transition duration-300 ease-in-out text-white transform hover:scale-110'>Close</button>

                                <button className='bg-red-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-500 transition duration-300 ease-in-out text-white transform hover:scale-110'
                                    onClick={() => alert("Order Confirm...We will deliever order in 20-25 minutes")}
                                >Confirm Order</button>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    )
};


export default Menuitem