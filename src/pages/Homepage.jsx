import React from 'react'
import Hero from '../components/Hero'
import ImportantDates from '../components/ImportantDates'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Sponsored from '../components/Sponsored'


function Homepage() {
    return (
        <>
            <Hero />
            <div className='px-12 mt-2'>
                <ImportantDates />
            </div>
            <div className='px-12 mt-2'>
                <About />
            </div>
            <div className='px-12'>
                <Sponsored/>
            </div>
        </>
    )
}

export default Homepage