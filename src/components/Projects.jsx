import React from "react";
import Primary from "./primary";
import { NavLink } from 'react-router-dom'
const Projects = () => {
  return (
    <div className="flex gap-5 mt-2">
      <Primary />
      <div className="w-[70%] h-[100vh] mr-5 mt-10 flex flex-col px-10 pt-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)] fade-enter fade-enter-active page-enter">
        <div>
          <h1 className="text-4xl font-bold mt-0 border-b-4 hover:w-43 hover:-translate-1 transis duration-150 rounded-sm w-15 border-purple-600 pb-2">
            PROJECTS
          </h1>
          <div>
            <div className="flex gap-1 mt-15 h-[80vh] flex-wrap">
              <div className="bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-[300px] h-[200px]">
                <NavLink target="_blank" to="https://github.com/Gopal-student21/Practice-projects/tree/main/04.Creative_image">
                <img
                  src="/Project1.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                  />
                  </NavLink>
                <p className="text-center mt-2">Creative image</p>
              </div>
              <div className="bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-[300px] h-[200px]">
              <NavLink target="_blank" to="https://github.com/Gopal-student21/Practice-projects/tree/main/Calculator">
                <img
                  src="/project2.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                  />
                  </NavLink>
                <p className="text-center mt-2">Calculator</p>
             
              </div>
              <div className="bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-[300px] h-[200px]">
              <NavLink target="_blank" to="https://github.com/Gopal-student21/Practice-projects/tree/main/QR-code">
                <img
                  src="/project3.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                  />
                  </NavLink>
                <p className="text-center mt-2">OR Generator</p>
              </div>
              <div className="bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-[300px] h-[200px]">
              <NavLink target="_blank" to="https://github.com/Gopal-student21/Practice-projects/tree/main/Ramdom_data_Generator">
                <img
                  src="/project4.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                  />
                  </NavLink>
                <p className="text-center mt-2">Random data Generator</p>
              </div>
              <div className="bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-[300px] h-[200px]">
              <NavLink target="_blank" to="https://github.com/Gopal-student21/Practice-projects/tree/main/To%20Do%20list">
                <img
                  src="/project5.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                  />
                  </NavLink>
                <p className="text-center mt-2">Todo List</p>
              </div>
              <div className="bg-[#0b0b0c] text-white font-bold ml-5 rounded-[15px] p-3 cursor-pointer hover:transform hover:scale-105 duration-300 w-[300px] h-[200px]">
              <NavLink target="_blank" to="https://github.com/Gopal-student21/Practice-projects/tree/main/weather%20app">
                <img
                  src="/project6.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                  />
                  </NavLink>
                <p className="text-center mt-2">weather App</p>
              </div>
              <div className="w-full flex justify-center">
            <NavLink target="_blank" className="w-[120px] rounded-[20px] flex justify-center items-center bg-[#122365] text-[18px] px-2" to="https://github.com/Gopal-student21/Practice-projects">Visit Github</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
