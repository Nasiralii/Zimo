import React from 'react'

function index() {
  return (
    <div className='lg:h-screen border-t grid md:grid-cols-3  grid-cols-1 xl:px-32 lg:px-8 p-4 items-center bg-white'>
      <div className='flex flex-col md:items-none items-center gap-3 justify-center'>
      <img className='md:w-60 w-48' src='./images/ZIMO B.png'/>
      <h4 className='uppercase text-[50px] text-gray-500'>PARTNER</h4>
      </div>
      <div className='flex flex-col items-center '>
      <img className='w-60 relative md:mt-20 mt-36' src='./images/CIVICA CES B.svg'/>
      <img className='w-60 xl:-mt-20 -mt-14' src='./images/Barclays.svg'/>
    
      </div>
    </div>
  )
}

export default index