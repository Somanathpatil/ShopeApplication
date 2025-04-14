import React from 'react'

const About = () => {
  return (
    <>
      <div id='about' className=' h-[90vh] w-full bg-gradient-to-r overflow-hidden scroll-smooth from-[#BBEEE0] to-[#E3E2E1]  opacity-95'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center h-full'>
          <div className=' flex flex-col px-4 py-2  justify-center items-center'>
              <h2 className='text-3xl  underline py-2 my-2 flex justify-center items-center ' style={{fontFamily:'cursive'}}>All-new technology</h2>
              <p className='flex justify-center items-center py-2 px-3'>
              News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.
              </p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='py-4 px-5 rounded-tr-[50%]' src="public/images/02.avif" alt="image" />
          </div>

        </div>
      </div>
    </>
  )
}

export default About