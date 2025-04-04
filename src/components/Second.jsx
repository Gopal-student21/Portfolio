import React from "react";
import { TypeAnimation } from "react-type-animation";

const second = () => {
  return (
    <div className="w-[70%] h-[100vh] mr-5 mt-10 flex flex-col px-10 pt-5 rounded-2xl bg-[#1E1E1F] shadow-[0_10px_30px_rgba(255,255,255,0.1)] fade-enter fade-enter-active page-enter">
      <h1 className="text-4xl font-bold mt-0 border-b-4 hover:w-25 hover:-translate-1 transis duration-150 rounded-sm w-15 border-purple-600 pb-2">
        Home
      </h1>
      <div className="flex justify-between  items-center mt-15">
        <div className=" mt-9 ml-15 gap-3 p-3 py-10 h-[400px] w-[500px]">
          <h1 className="text-5xl mt-10">
            Hi I am{""}
            <span className="text-purple-600 noto-sans-canadian-aboriginal-name p-1">
              Gopal
            </span>
            👋
          </h1>
          <h1 className="inline-block m-1 text-5xl">I am Passonate</h1>
          <div>
            <TypeAnimation
              sequence={[
                " Web Developer",
                1000,
                "Frontend",
                1000,
                "and Backend Developer",
              ]}
              wrapper="span"
              speed={40}
              style={{
                fontSize: "2.5em",
                display: "inline-block",
                color: "#9333ea",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="flex mt-15 gap-5 my-10 mx-0">
            <a href="/Resume.pdf" target="_blank">
              <button className="button">Resume</button>
            </a>
            <button className="button">Hire me</button>
          </div>
        </div>
        <img className="w-[400px]" src="/developer.webp" alt="img" />
      </div>
    </div>
  );
};

export default second;
