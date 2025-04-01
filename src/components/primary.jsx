import React from 'react'
import SocialIcons from './SocialIcons'

const primary = () => {
  return (
    <div className='w-[25%] flex justify-center items-center flex-col gap-5 m-10 ml-0 p-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)]'>
      <div className='flex flex-col items-center gap-5'>
      <img className='w-40 rounded-2xl mt-10 drop-shadow-2xl' src="/profile-pic.png" alt="profile-Img"/>
      <h1 className='font text-4xl mb-0.5'>Gopal Chadhary</h1>
      <h1 className='font text-lg bg-[#2B2B2C] mt-0.5 p-2 rounded-[10px] shadow-[0_10px_30px_rgba(255,255,255,0.1) mb-2'>Web Developer</h1>
      <div className='w-full flex justify-center items-center border-t-3 border-b-3 border-[#2B2B2C]'> 
        <ul className='w-full flex flex-col gap-5 p-5'>
          <li><div className='mail p-1  flex justify-center items-center'><div className='mx-3'><p className='text-gray-500 '>Email</p><h1 className='hov'>chaudharygopal392@gmail.com</h1></div></div></li>
          <li><div className='call  p-1 flex  items-center'><div className='mx-3'><p className='text-gray-500 '>Phone</p><h1 className='hov'>+977 9823665771</h1></div></div></li>
          <li><div className='location p-1 flex items-center'><div className='mx-3'><p className='text-gray-500 '>Location</p><h1 className='hov'>Kathmandu,Nepal</h1></div></div></li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
      <SocialIcons/>
    </div>
      </div>
      
    </div>
  )
}

export default primary
