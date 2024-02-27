import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET <span className='text-red-700'>HOT</span></p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>IN <span className='text-amber-400'>JUNE</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I may have provided the data, but you have to want the results. You can't get the <span className='text-yellow-600 font-medium'>results</span> if you aren't willing to put in <span className='text-yellow-600 font-medium'>work</span>. Warning you may not be able to fit through doors without during sideways after you're done.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}