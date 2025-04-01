import React from 'react'
import Primary from './primary'

const Contact = () => {
  return (
    <div className='flex gap-5 mt-2'>
    <Primary/>
    <div className='w-[70%] h-[100vh] mr-5 mt-10 flex flex-col px-10 pt-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)]'>
        I am contact page
    </div>
  </div>
  )
}

export default Contact
