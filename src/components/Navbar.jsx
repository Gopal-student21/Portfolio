import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full'>
      <div className="container mx-auto">
        <ul className=' w-[40%] mx-auto border-none h-5  flex justify-evenly items-center mt-5 p-7 rounded-2xl bg-color gap-12 text-[15px]  font-bold font shadow-[0_10px_30px_rgba(255,255,255,0.1)]'> 
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Projects"><li>Projects</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Contact</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
