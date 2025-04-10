import React from 'react'
import Primary from './primary'

const About = () => {
  return (
      <div className='flex gap-7 mt-2 responsive'>
      <Primary/>
      <div className=' responsive-contact w-[70%] h-[100vh] mr-5 gap-6 mt-10 flex flex-col px-10 pt-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)] fade-enter fade-enter-active page-enter'>
      <h1 className="text-4xl font-bold mt-0 border-b-4 hover:w-25 hover:-translate-1 transis duration-150 rounded-sm w-15 border-purple-600 pb-2">
        About
      </h1>
      <p className='text-gray-400 text-lg mt-5'>I am a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. I have experience in building responsive and user-friendly web applications. I am always eager to learn new technologies and improve my skills.</p>
      <h1 className="text-3xl  font-bold mt-5   hover:-translate-1 transis duration-150 rounded-sm w-60 ">
        What I'm Doing
        <hr className='border-3 my-3 border-purple-500 rounded-sm w-[40px]'/>
      </h1>

      <div className='text-gray-400 text-lg mt-5n flex  items-center gap-10'>
        <div className='flex justify-center items-center gap-2 bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-67 h-20'>
       <img src="/webdev.png" alt="" className='w-10 flex justify-center items-center'/> <p>Web Development</p>
        </div>
        <div className='flex justify-center items-center gap-2 bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-67 h-20'>
          <img src="/cyber-security.png" alt="" className='w-10 flex justify-center items-center' /><p>Cyber security</p>
        </div>
      </div>
      <div>
      <h1 className="text-3xl  font-bold mt-5   hover:-translate-1 transis duration-150 rounded-sm w-60 ">
        Skills
        <hr className='border-3 my-3 border-purple-500 rounded-sm w-[40px]'/>
      </h1>
      <div className='text-gray-400 text-lg mt-5n flex  items-center  w-full border-2 border-purple-500 rounded-xl p-8'>
        <div className='flex gap-10 border-r-5 rounded-[5px]  border-purple-700 w-[70%] responsive-contact2'>

        <div className=' w-[250px] flex flex-col justify-center items-center px-3'>
        <p className='font-bold text-purple-400 text-[26px]'>Language</p>
        <p className='mx-6'>HTML, CSS, Javascript, Node.js, Express.js</p>
        </div>
        <div className=' w-[250px] flex flex-col justify-center items-center px-3  '>
        <p className='font-bold text-purple-400 text-[26px]'>Library&Framework</p>
        <p className='mx-5'>React,Next.js</p>
        </div>

      </div>
        <div className=' w-[250px] flex flex-col justify-center items-center px-3'>
        <a href="/Resume.pdf" className='p-5 bg-gray-700 w-[200px] h-15 items-center rounded-[15px] flex justify-center hover:-translate-y-1 transis'>Explore Resume</a>
        </div>
      </div>
      </div>
    </div>
    </div>
 
  )
}

export default About
