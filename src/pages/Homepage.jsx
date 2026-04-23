import React from 'react'
import Hero from '../components/Hero'
import ImportantDates from '../components/ImportantDates'
import About from '../components/About'
import Sponsored from '../components/Sponsored'

const cmtAcknowledgment =
    "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.";

function Homepage() {
    return (
        <>
            <Hero />
            <div className='px-12 mt-6'>
                <div className='overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm'>
                    <div className='inline-flex rounded-br-2xl bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white'>
                        CMT Acknowledgment
                    </div>
                    <div className='border-t border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 px-6 py-5 text-base leading-8 text-gray-800'>
                        <p>{cmtAcknowledgment}</p>
                    </div>
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
