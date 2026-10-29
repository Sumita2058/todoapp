import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-gray-500 mb-16 text-center md:flex justify-between items-center gap-2 p-10">
      <div className="flex-col items-center justify-center">
        <h1 className="text-xl text-center font-bold">Sumita Rai</h1>
        <p className="text-gray-800 p-2 text-xl"> 
          I design and build highly sacalable web application using react.js and
          tailwindcss.
        </p>
      </div>
      <div className="flex items-center ml-48 text-xl gap-4 p-6 text-center text-gray-800">
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
      </div>
     <span className="text-gray-800 p-2">@ All Right Reserved.</span>
    </div>
  );
}

export default Footer;
