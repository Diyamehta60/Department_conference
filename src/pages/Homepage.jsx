import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImportantDates from '../components/ImportantDates'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Footer from '../components/Footer'

function Homepage() {
    return (
        // <Navbar/>
        <>
            <Hero />
            <div className='px-12 mt-2'>
                <Marquee />
            </div>
            <div className='px-12 mt-2'>
                <ImportantDates />
            </div>
            <div className='px-12 mt-2'>
                <About />
            </div>
            <div className='px-12 mt-8'>

                <Footer />
            </div>
        </>
    )
}

export default Homepage