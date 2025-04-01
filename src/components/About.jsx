import React from 'react'
import Primary from './primary'

const About = () => {
  return (
      <div className='flex gap-5 mt-2'>
      <Primary/>
      <div className='w-[70%] h-[100vh] mr-5 mt-10 flex flex-col px-10 pt-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)]'>
      <h1 className="text-4xl font-bold mt-0 border-b-4 hover:w-25 hover:-translate-1 transis duration-150 rounded-sm w-15 border-purple-600 pb-2">
        About
      </h1>
      <p className='text-gray-400 text-lg mt-5'>I am a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. I have experience in building responsive and user-friendly web applications. I am always eager to learn new technologies and improve my skills.</p>
      <h1 className="text-3xl  font-bold mt-5   hover:-translate-1 transis duration-150 rounded-sm w-60 ">
        What I'm Doing
        <hr className='border-3 my-3 border-purple-500 rounded-sm w-[40px]'/>
      </h1>

      <div className='text-gray-400 text-lg mt-5n flex  items-center gap-10'>
        <div className='flex justify-center items-center gap-2'>
       <img src="/webdev.png" alt="" className='w-10 flex justify-center items-center'/> <p>WeB Development</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <img src="/cyber-security.png" alt="" className='w-10 flex justify-center items-center' /><p>Cyber security</p>
        </div>
      </div>
      </div>
    </div>
 
  )
}

export default About
