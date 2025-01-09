"use client"
import React from 'react'

interface Offer {
  title: string;
  description: string;
}
const SpecialOffer: React.FC =() => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "Avail 30% discount on all desi foods till 5:00 p.m to 12:00 a.m(only for sunday)"
    },
    {
      title: "Family Meal Deals",
      description: "Order 3 large pizza and enjoy 1 free regular pizza(flavour of your choice)"
    },
    {
      title: "Weekly Brunch",
      description: "Order any 2 Meals of Chinese Food and enjoy 1 Free Dessert(limited dessert)"
    },
    {
      title: "Mid-Night Deals",
      description: "Order 2 Zinger Burgers and avail 50% discount on 1 club sandwich(only for saturday)"
    }
  ];

  const handleOfferClick =(description:string) =>{
    alert(description)
  }

  return (
    <section className='p-10'>
      <div className='mx-auto text-center'>
        <h1 className='text-5xl font-semibold underline cursor-pointer tracking-wider py-12'>Special Offers</h1>
        <div className='grid col-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mx-4'>
          {offers.map((offers , index) =>(
            <button key={index}
            onClick={()=>handleOfferClick(offers.description)}
            className=' bg-white shadow-lg text-center hover:bg-orange-200 transition duration-500 transform ease-in-out hover:scale-105 rounded-2xl mt-9'
            >
              <h1 className='text-3xl font-semibold text-orange-600 p-4'>{offers.title}</h1>
              <p className='text-2xl font-semibold text-slate-700 mb-4 mx-2'>{offers.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
export default SpecialOffer