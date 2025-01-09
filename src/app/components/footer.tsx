import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center mb-0 bg-gradient-to-r from-black to-slate-300 '>
        <nav className='flex justify-center flex-wrap gap-7 text-slate-500  bg-gradient-to-r from-black to-slate-300 underline cursor-pointer pt-8 font-semibold tracking-wider'>
          <a href="#" className='text-yellow-400 hover:text-amber-500 text-2xl'>
            Home
          </a>
          <a href="#" className='text-yellow-400 hover:text-amber-500 text-2xl'>
            About
          </a>
          <a href="/contact" className='text-yellow-400 hover:text-amber-500 text-2xl'>
            Contact
          </a>
          <a href="#" className='text-yellow-400 hover:text-amber-500 text-2xl'>
            Delievery
          </a>
        </nav>
        <div className='flex justify-center gap-9 transition-transform duration-500 ease-in-out transform'>
          <a href="https://www.facebook.com/tooba.saleem.739?mibextid=ZbWKwL" target='_blank' rel='nofollow noopener'>
            <Image
              src="/footer/facebook-logo.png"
              alt="facebook-logo"
              width={400}
              height={400}
              className='w-16 h-16 ' />
          </a>

          <a href="https://www.linkedin.com/in/tooba-saleem-043b972b4/" target='_blank' rel='nofollow noopener'>
            <Image
              src="/footer/linkedin-logo.png"
              alt="Linkedin-logo"
              width={400}
              height={400}
              className='w-16 h-16 ' />
          </a>
          <a href="https://github.com/ToobaSaleem1234" target='_blank' rel='nofollow noopener'>
            <Image
              src="/footer/github-logo.webp"
              alt="github-logo"
              width={400}
              height={400}
              className='w-16 h-16' />
          </a>
          <a href="https://vercel.com/tooba-saleems-projects" target='_blank' rel='nofollow noopener'>
            <Image
              src="/footer/vercel-logo.svg"
              alt="vercel-logo"
              width={400}
              height={400}
              className='w-16 h-16' />
          </a>
        </div>
        <p className='text-yellow-400 hover:text-orange-300 text-2xl font-semibold tracking-wide leading-10 text-center'>2025 Food Fusion, All Rights Reserved..</p>
        <br />
      </footer>
    </div>
  )
}

export default Footer