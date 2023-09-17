import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu,AiFillGithub, AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import NavItems from "./NavItems";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };
  const handleCreateAccount = () => {
    navigate("/create-account");
  };
  return (
    <>
      <div className="shadow-sm  ">
        <nav className="py-2 px-[5%] max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:hidden">
            <AiOutlineMenu size={25} onClick={handleNav} />
            <Link to="/">
              <img
                src="./icons/blog-verse.svg"
                className="w-[40px] h-[50px] rounded"
              />
            </Link>
            
          </div>
          <div className="hidden md:flex">
            <img
                src="./icons/blog-verse.svg"
                className="w-[40px] h-[50px] rounded mr-5"
            />
            <div className="flex items-center border px-2 hover:border-gray-400 rounded-md focus:ring-1 focus:ring-indigo-300">
              <input type="text" placeholder="Search..." className="text-md focus:outline-none mr-2 my-0 w-[400px] md:w-[350px]" />
              <div className="hover:bg-indigo-100 p-2 self-center"><FiSearch size={20} /> </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="md:hidden"><FiSearch size={25} /> </div>
            <button className="hidden md:block p-2 rounded focus:bg-indigo-200 focus:underline">
            Login
          </button>
            <button 
              className="text-indigo-600 border border-indigo-600 font-bold p-2 rounded focus:bg-indigo-600 focus:text-white focus:underline"
              onClick={handleCreateAccount}>
              Create account
            </button>
          </div>
        </nav>
      </div>

      <div
        className={
          !nav
            ? "bg-white w-[75%] fixed h-full top-0 left-0 border-r-2 py-2 ease-in-out duration-500 z-[999]"
            : "hidden"
        }
      >
        <div className="py-2 px-5 flex justify-between items-center mb-5">
          <h1 className="text-xl font-bold">Blog Verse</h1>
          <AiOutlineClose size={20} onClick={handleNav} />
        </div>
        <div className="bg-gray-100 mx-1 p-5 rounded mb-3">
          <h3 className="text-gray-600 mb-3">
            The place where people share and stay up-to-date
          </h3>
          <button className="text-indigo-600 border border-indigo-600 font-bold p-2 rounded w-full mb-3 focus:bg-indigo-600 focus:text-white focus:underline"
            onClick={handleCreateAccount}>
            Create account
          </button>
          <Link to="/auth/signin">
          <button className="w-full p-2 rounded focus:bg-indigo-200 focus:underline">
            Login
          </button>
          </Link>
        </div>
        <NavItems />
        <div className="flex gap-5 px-5">
          <Link to="https://github.com/vamsikrishnarh7"><AiFillGithub size={20}/></Link>
          <Link to="https://www.linkedin.com/in/durga-vamsi-krishna-pullapanthula-1b1615255/"><AiOutlineInstagram size={20} /></Link>
          <Link to ="<AiOutlineInstagram size={20} />"><AiFillLinkedin size={20} />  </Link>
                
        </div>
      </div>
    </>
  );
};

export default Navbar;
