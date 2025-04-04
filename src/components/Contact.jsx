import React from 'react'
import Primary from './primary'

const Contact = () => {
  return (
    <div className='flex gap-5 mt-2'>
    <Primary/>
    <div className='w-[70%] h-[100vh] mr-5 mt-10 flex flex-col px-10 pt-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)] fade-enter fade-enter-active page-enter'>
    <h1 className="text-4xl font-bold mt-0 border-b-4 hover:w-35 hover:-translate-1 transis duration-150 rounded-sm w-15 border-purple-600 pb-2">
        Contact
      </h1>
    </div>
  </div>
  )
}

export default Contact
