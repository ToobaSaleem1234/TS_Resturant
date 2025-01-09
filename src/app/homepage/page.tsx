import React from 'react'
import Progressor from '../components/progressor'
import Banner from '../components/banner'
import Menu from '../components/menu'
import Main from '../components/main'
import Cart from '../components/cart'

const Hero = () => {
    return (
        <section>
            <Banner />
            <Main/>
            <Progressor />
            <Menu />
            <Cart/>

        </section>
    )
}

export default Hero