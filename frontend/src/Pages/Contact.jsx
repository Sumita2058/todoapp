import React from 'react'
import Navbar from '../components/Navbar';


   function Contact() {
  return (
    <div className=" min-h-screen  items-center">
      {/* <Navbar/> */}
      <div className="flex p-6 items-center justify-center">
        <form className="flex flex-col border p-6 rounded-sm w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-400">Contact us</h1>
        <label>Name:</label>
        <input type="text" placeholder="your name" required/>
        <label>Email</label>
        <input type="email" placeholder="your email" required />
        <label>Subject:</label>
        <input type="text" placeholder="your subject" required/>
        <label>Message:</label>
        <textarea placeholder="your message" required></textarea>

        <button>Send Message</button>
      </form>
      </div>
    </div>
  );
}



export default Contact