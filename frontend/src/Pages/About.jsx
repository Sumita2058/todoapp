import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import { RiFocus2Fill } from "react-icons/ri";
import { GiStrikingClamps } from "react-icons/gi";
import Navbar from '../components/Navbar';

 
function About() {
  return (
    <div className='bg-slate-800  h-full'>
      
      <div className="p-10 text-center">
        <span className='uppercase text-green-400 font-semibold px-10'>About our todo app</span>
        <h1 className='text-3xl font-semibold text-white p-3'>Stay Organized. <span className='text-green-400'>Stay Focused.</span></h1>
        
        
        <p className='text-gray-400 m-1'>A simple todo app designed to help you organized your daily tasks, manage your priorities, and <br/>getting things done.</p>
      </div>

      <div className="flex p-6 gap-10">
        <div className='p-4 border border-white/4 bg-gray-800 rounded-xl backdrop-blur-md'>
          <IoIosCheckmark className='text-4xl'/>
          <span className='font-semibold text-white text-md'>Add Tasks</span>
          <p className='text-gray-400 text-sm pt-2'>Quickly add your daily tasks and keep track of what needs to be done</p>
        </div>
         <div className='p-4 border border-white/4 bg-gray-800 rounded-xl backdrop-blur-md'>
          <RiFocus2Fill className='text-xl text-blue-600 m-2'/>
          <span className='font-semibold text-white text-md'>Stay Focused</span>
          <p className='text-gray-400 text-sm pt-2'>Keep your promise clear and focused on completing your important tasks</p>
        </div>
         <div className='p-4 border border-white/4 bg-gray-800 rounded-xl backdrop-blur-md'>
          <GiStrikingClamps className='text-2xl text-yellow-300 m-1'/>
          <span className='font-semibold text-white text-md'>Get Things Done</span>
          <p className='text-gray-400 text-sm pt-2'>Complete your tasks and make your day more productive.</p>
        </div>
        
      </div>
      <div className="flex flex-row items-center">
  <span className=" text-gray-400 ">
    plan it. Do it. Complete it.
    <IoIosCheckmark className="text-3xl" />
  </span>
</div>
    </div>
  )
}

export default About