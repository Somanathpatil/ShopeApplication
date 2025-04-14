import React from 'react'

const Category = () => {
  return (
    <>
      <div className='bg-gradient-to-r p-3 from-[#BBEEE0] to-[#E3E2E1] h-[90vh] w-full ' id='Category'>
        <h1 className='text-3xl flex justify-center items-center py-4 mt-4 font-bold underline ' style={{ fontFamily: 'cursive' }}  >Shop by category</h1>
        <div className='grid pt-5 grid-cols-3 gap-5'>
          <div className="py-4 px-24 flex transition-transform duration-300 hover:scale-105">
            <div className='bg-white w-auto   hover:shadow-orange-300 shadow-2xl items-center rounded-tr-[20%] rounded-bl-[20%] h-[58vh] flex flex-col '>
              <img className='w-50% h-48 px-4  mt-6 rounded-tr-[25%] m-3 relative ' src="public/images/phone.jpeg" alt="" />
              <h1 className='text-2xl font-bold my-3' style={{ fontFamily: '-moz-initial' }}>Phones & Accessories</h1>
              <p className='flex px-6 text-center mt-6'>High class, high quality phones at affordable prices</p>
            </div>
          </div>
          <div className="py-4 flex transition-transform duration-300 hover:scale-105 px-24 ">
            <div className='bg-white w-auto  hover:shadow-orange-300 shadow-2xl  items-center rounded-tr-[20%] rounded-bl-[20%] h-[58vh] flex flex-col '>
              <img className='w-50% h-48 px-4  mt-6 rounded-tr-[25%] m-3 relative ' src="public/images/phone.jpeg" alt="" />
              <h1 className='text-2xl font-bold my-3' style={{ fontFamily: '-moz-initial' }}>Computer Equipment</h1>
              <p className='flex px-6 text-center mt-6'>All your desktop or laptop needs made available</p>
            </div>
          </div>
          <div className="py-4 px-24 flex transition-transform duration-300 hover:scale-105  ">
            <div className='bg-white w-auto hover:shadow-orange-300 shadow-2xl  items-center rounded-tr-[20%] rounded-bl-[20%] h-[58vh] flex flex-col '>
              <img className='w-50% h-48 px-4  mt-6 rounded-tr-[25%] m-3 relative  ' src="public/images/phone.jpeg" alt="" />
              <h1 className='text-2xl font-bold my-3' style={{ fontFamily: '-moz-initial' }}>miscellaneous items</h1>
              <p className='flex px-6 text-center mt-6'>We've got more stuff to meet your techie needs</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
        <button className='flex justify-center items-center mt-4 py-4 px-3 font-bold  bg-blue-300 rounded-4xl transition-transform duration-300 hover:scale-95 cursor-pointer '>Shope All</button>
        </div>
        
      </div>
    </>

  )
}

export default Category
