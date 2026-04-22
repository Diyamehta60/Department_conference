import React from 'react'
import Hero from '../components/Hero'
import ImportantDates from '../components/ImportantDates'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Sponsored from '../components/Sponsored'

const cmtAcknowledgment =
    "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.";

function Homepage() {
    return (
        <>
            <Hero />
            <div className='px-12 mt-6'>
                <div className='rounded-md border border-red-200 bg-red-50 px-5 py-4 text-sm text-gray-800'>
                    <p>{cmtAcknowledgment}</p>
                </div>
            </div>
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
