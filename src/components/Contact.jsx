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
      <div>
      <h1 className="text-2xl font-bold mt-10">
        Contact Form
      </h1>
      <form action="">
        <input type="text" name='Name' placeholder='Full Name' required className='w-full border-1 border-gray-500 p-4  m-3 mt-4 rounded-2xl focus:border-purple-500' />
        <input type="email" name='email' placeholder='Email' required className='w-full border-1 border-gray-500 p-4  m-3 mt-4 rounded-2xl focus:border-purple-500' />
       <textarea type="email" placeholder='Your message...' required className='w-full border-1 border-gray-500 p-6  m-3 mt-4 rounded-2xl resize-none focus:border-purple-500' />
        <input type="submit" value="Submit" className='w-30 border-2 border-gray-500 mx-7 m-5 p-3 rounded-2xl '/>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
