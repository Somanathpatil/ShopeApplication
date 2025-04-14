import React from 'react'

const Home = () => {
  return (
    <div id='home' className=' scroll-smooth flex justify-center bg-gradient-to-r from-[#eebbbb] to-[#E3E2E1] overflow-hidden min-h-[80vh]  md:min-h-[85vh] lg:min-h-[90vh]'> 
      <div className='flex flex-col px-4 justify-center items-center'>
          <h1 className='text-7xl ' style={{fontFamily:'-moz-initial'}}>The Westmire</h1>
          <h1 className='text-7xl  font-bold py-2' style={{fontFamily:'fantasy'}}>A56 Headset</h1>
          <div className='flex justify-center  items-center  mt-6 p-3'>
            <button className='flex transition-transform duration-300 transform hover:scale-105 bg-white px-4 py-2.5 m-2 rounded-full text-2xl cursor-pointer' style={{fontFamily:'serif'}}>Buy Now</button>
            <button className='flex transition-transform duration-300 transform hover:scale-105 bg-white px-4 py-2.5 m-2 rounded-full text-2xl cursor-pointer' style={{fontFamily:'serif'}}>Shop Now</button>
          </div>
      </div>
      <div className='flex justify-center m-4 transition-transform duration-300 transform hover:scale-105 items-center w-auto px-4'>
          <img className='py-3 px-4 hover:transition-opacity duration-300  transition-all' src="/images/headphon.png" alt="Headphone" />
      </div>

    </div>
  )
}

export default Home