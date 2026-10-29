import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { TbMoonStars } from "react-icons/tb";
import "../App.css";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
  
  <div className="background min-h-screen bg-cover bg-center relative">
    <div className="absolute  bg-gray-800/85 "></div>    {/*for background dark */}
  <div className="flex p-10 justify-between">
 
 
     
    <div className="p-6">
         

  <div className="inline-flex items-center gap-2 border border-green-600/50 p-3 m-2 text-sm rounded-full bold text-green-600 mb-2 ">
    <GoDotFill className='text-green-300 h-2 w-2 rounded-full'/>
    <span className='font-semibold text-xl'>Simple. Focused. Productive.</span>
  </div>

  <div className="">
    <h1 className='font-bold text-white text-6xl'>Organized Your<br/> <span className='text-green-600'>Day Better.</span></h1>
    <p className='text-gray-500 text-xl p-2'>Manage your daily tasks, stay focused on your goals, and 
     <br/>  accomplish more with a clean and simple productivity experiences</p>
      
      <div className="flex gap-6">
      <button>
         <Link
  to="/features"
  className="rounded-md  p-4 font-semibold text-white flex gap-2 items-center"
>
  Get started
  <FaArrowRight />
</Link>
      </button>
      <button className=' bg-blue-600 p-6 font-semibold text-white hover:bg-blue-700 '>Learn more</button>
      </div>
  </div>

  <div className="flex gap-4 text-gray-500 mt-4">
    <span className='flex  items-center '><IoIosCheckmark />Easy to use</span>
    <span className='flex  items-center '><IoIosCheckmark />Stay Organized</span>
    <span className='flex  items-center'><IoIosCheckmark />Boost Productivity</span>
 </div>
</div>

 












<div className="p-40">
  <div className="w-70 h-70 rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center">

  <div className="text-7xl text-white">
    <IoIosCheckmark />
  </div>
  <h1 className="mt-8 text-3xl font-bold text-white">TODO</h1>
   <p className="mt-2 text-gray-400">Plan • Focus • Achieve</p>
 
</div>
 
<div className="">
  <p>
    Your productivity<br/>
    Start today
<TbMoonStars />
  </p>
</div>
</div>



</div>
  </div>
   </div>

  )
}

export default Hero