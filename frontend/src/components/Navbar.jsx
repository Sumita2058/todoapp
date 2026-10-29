// import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
// import image from "../assets/image.jpg";
// import { Link } from "react-router-dom";
// import {useState} from "react"
// function Navbar() {
//   const [open, setOpen] = useState(false);
//    const token = localStorage.getItem("token")
//      const nav = useNavigate()
//   const Navlinks=[
//     {
//         name: "Home",
//         path: "/home"
//     },
//      {
//         name: "About",
//         path: "/about"
//     },
    
//     {
//         name: "Todo",
//         path: "/todo"
//     },
//     {
//         name: "Contact",
//         path: "/contact"
//     }
// ]


//   return (

//     <div className="bg-green-600 p-2   w-full">
  
//     <div className="justify-between">
//          <NavLink to="/" className=" flex gap-2 items-center">
//        <img src={image} alt="image" className='h-10'/>
//         <h1 className='text-white'>TodoApp</h1>
//       </NavLink>
//       <button onClick={()=> setOpen(!open)}
//         className="font-bold md:hidden hover:scale-110 transition duration-700 text-white text-2xl p-2 m-2 ">
//          {open ? <HiOutlineX /> : <HiOutlineMenu />}
//       </button>
    
//      <ul className=" md:flex hidden gap-3 mt-4 text-white justify-center ">
//       {
//         Navlinks.map((link, index)=>(
//           <li key={index}>
//             <Link to={link.path}>{link.name}</Link>
//           </li>
//         ))
//       }
//      </ul>
    
//         {
//           token ? (
//             <Link to="/login" >
//               <button className='sm:block hidden' onClick={logout}>
//                 Logout
//               </button>
//             </Link>
//           ) : (
//             <Link to="/login" >
//               <button className='sm:block hidden '>Login</button>
//             </Link>
//         )
//          }
//     </div>
     
//       {
//        open &&(
//          <ul className="absolute  z-50 text-white h-full w-full  space-y-6 border-white/20 bg-white/10 backdrop-blur-md ">
//             {
//               Navlinks.map((link, index)=>(
//                 <li key={index}
//                 className="hover:scale-100 transition duration-700 ease-in-out">
//              <Link to={link.path} onClick={()=> setOpen(false)}>{link.name}{""}</Link>
//                 </li>
//               ))
//             }
//         </ul>
//       )
//      }
//     </div>
//   )
// }


// export default Navbar



import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import image from "../assets/image.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const nav = useNavigate();

  const Navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Todo",
      path: "/todo",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    setOpen(false);
    nav("/login");
  };

  return (
    <nav className="relative z-50 w-full bg-green-600 p-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={image}
            alt="TodoApp logo"
            className="h-10 w-10  object-cover"
          />
          <h1 className="text-xl font-bold text-white">TodoApp</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center justify-center gap-6 text-white md:flex">
          {Navlinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 hover:text-green-200 ${
                    isActive ? "font-bold underline underline-offset-4" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login / Logout */}
        <div className="hidden items-center gap-3 sm:flex">
          {token ? (
            <button
              onClick={logout}
              className="rounded-lg bg-white px-4 py-2 font-semibold text-green-700 transition hover:bg-green-100"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-green-700 transition hover:bg-green-100"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 text-2xl text-white transition hover:scale-110 sm:hidden"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <ul className="absolute left-0 top-full flex w-full flex-col gap-5 border-t border-white/20 bg-green-700/95 p-6 text-white shadow-lg backdrop-blur-md sm:hidden">
          {Navlinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className="block transition hover:translate-x-1 hover:text-green-200"
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            {token ? (
              <button
                onClick={logout}
                className="rounded-lg bg-white px-4 py-2 font-semibold text-green-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-green-700"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;


       