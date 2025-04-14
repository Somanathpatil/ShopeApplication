import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className=' top-0 sticky  overflow-hidden  flex bg-gradient-to-r from-[#E6B2BA] to-[#FAD0C4]  py-6 ' style={{fontFamily:'monospace'}}>
      <div className=' absolute max-w-7xl inset-0 flex justify-between items-center mx-auto px-4 py-6'>
        <div className='flex start-0 px-3'>
          <h1 className='text-3xl font-bold text-yellow-500' style={{fontFamily:'cursive'}}>LOgo</h1>
        </div>

          <ul className="flex list-none font-semibold text-2xl gap-6  items-center text-end px-2">
            <li className=""><a href="#home" className="">Home</a></li>
            <li className=""><a href="#about" className="">About</a></li>
            <li className=""><a href="#Category" className="">Category</a></li>
            <li className=""><a href="#support" className="">Support</a></li>
            <li className=""><a href="#contact" className="">Contact</a></li>
          </ul>

        {/* <nav className='flex list-none font-semibold text-2xl gap-6  items-center text-end px-2 '>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/"><li className='px-1.5'>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about"><li className='px-1.5'>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/category"><li className='px-1.5'>Category</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/support"><li className='px-1.5'>Support</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contact"><li className='px-1.5'>Contact</li></NavLink>
        </nav> */}
      </div>
    </div>

  )
}

export default Navbar