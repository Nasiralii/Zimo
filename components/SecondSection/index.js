import React from 'react'

function index() {
  return (
    <div className='uppercase md:px-12 px-4'>
    <h2 className='text-center my-8 md:mb-16'>a real estate and property platform that is changing the world</h2>
    <div className='flex flex-col md:gap-2 gap-8 my-4'>
        <div className='flex flex-col gap-2 md:text-left text-center'>
            <h4 className='md:text-[25px]'>a revolutionary platform</h4>
            <h3 className='md:text-[40px] text-[30px]'>entries-sellers</h3>
            <h2 className='md:text-[60px] text-[45px]'>worldwide</h2>
        </div>
        <div className='flex flex-col md:gap-4 gap-6 text-center md:items-end  '>
            <img className='xl:w-[30%] lg:w-[40%] md:w-[50%] ' src='./Images/ZIMO ZIG B.png'/>
           <div className='flex flex-col md:gap-2 gap-6'>
           <p className=''>connecting users from across the globe</p>
            <p className=''>to facilitate life's most important</p>
            <p>personal transactions</p>
           </div>
        </div>
        <div className='flex flex-col relative md:text-left text-center md:md:-mt-6  '>
            <h2 className='text-2xl'>the best of the best</h2>
            <p className='md:w-[45%] leading-8 my-5'>a combination of automation and manual curatoin our pro ageents and moderation team selects the highest quality listings on the market from across the world</p>
            </div>
    </div>
    <img className='flex justify-center w-24 mx-auto' src='./Images/arrow-down.webp'/>
    </div>
  )
}

export default index