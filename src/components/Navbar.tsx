import { useState } from 'react';
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="mt-2 hidden md:flex flex-row items-center justify-between">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div className="flex flex-row gap-4">
          <a className="mt-2 transition-colors duration-300 ease-in-out hover:text-blue-600"
 href="/">Refer & Earn</a>
          <a className="mt-2 transition-colors duration-300 ease-in-out hover:text-blue-600"
 href="/">Resources</a>
          <a className="mt-2 transition-colors duration-300 ease-in-out hover:text-blue-600"
 href="/">About Us</a>
          <div className='inline-flex'>
            <a href="/" className="bg-gray-300 rounded-md px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Login</a>
            <a href="/" className="ml-4 bg-blue-500 rounded-md text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-105">Try for free</a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mt-2 ml-2 flex items-center justify-between md:hidden">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <div className="flex items-center mr-4 gap-3">
          <a href="/" className="bg-blue-500 text-white rounded-md px-4 py-2">Explore</a>
          <MenuIcon 
            onClick={() => setMenu(true)} 
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
          />
        </div>
      </div>

      {/* Full-Screen Mobile Menu with Smooth Animation */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-blue-300 bg-opacity-90 z-50 flex flex-col items-center justify-center
          transform transition-transform duration-300 ease-in-out 
          ${menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
        `}
      >
        <CloseIcon 
          onClick={() => setMenu(false)} 
          className=" absolute top-6 right-6 cursor-pointer text-3xl transition-transform duration-200 hover:scale-110"
        />
        <a href="/" className="text-xl py-3 hover:text-gray-300 transition-colors duration-200">Refer & Earn</a>
        <a href="/" className="text-xl py-3 hover:text-gray-300 transition-colors duration-200">Resources</a>
        <a href="/" className="text-xl py-3 hover:text-gray-300 transition-colors duration-200">About Us</a>
        <div className="mt-6 flex flex-col items-center gap-4">
          <a href="/" className="bg-gray-300 text-black rounded-md px-6 py-3 transition-all duration-200 hover:bg-gray-200">Login</a>
          <a href="/" className="bg-blue-500 text-white rounded-md px-6 py-3 transition-all duration-200 hover:bg-blue-600">Try for free</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
