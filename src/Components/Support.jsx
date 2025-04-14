import React from 'react'

const Support = () => {
  return (
    <div id='support' className='bg-gradient-to-r from-[#BBEEE0] to-[#E3E2E1] h-[90vh] overflow-hidden w-full'>
      <div className='grid grid-cols-2'>
        <div className=" px-12 flex flex-col justify-center">
          <h1 className='text-3xl p-3' style={{ fontFamily: 'cursive' }}>Expert Support</h1>
          <p className='flex flex-col justify-center  px-3 py-4 '>Faulty phone battery? Slow laptop? We have
            in-house tech experts who can assist you.
            <span className='mt-5'/>

            Visit us in stores!</p>
            <div className='flex flex-col start-0'>
            <h1 className='font-bold text-xl mt-6 p-5'> Our locations</h1>
            <p>123 Anywhere St.</p>
            <p>Any City, State, Any Country</p>
            <p>(123) 456 7890</p>
            </div>
            <div className='flex flex-col start-0 my-6'>
            <p>123 Anywhere St.</p>
            <p>Any City, State, Any Country</p>
            <p>(123) 456 7890</p>
            </div>
            
        </div>
        <div className=" flex justify-center items-center p-14">
          <img  className='p-16 rounded-tr-[25%] ' src="public/images/chimg.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Support