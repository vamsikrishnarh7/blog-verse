import React from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import NavItems from "../components/NavItems";
import { Link } from "react-router-dom";
import BlogAbstract from "../components/BlogAbstract";

const Home = () => {
  const handleCreateAccount = () => {};
  return (
    <div className="bg-[#f5f5f5] py-5">
      <div className="max-w-[1400px] mx-auto lg:px-[5%] flex gap-5">
        {/* Navbar for lg devices */}
        <div className="hidden md:block min-w-[200px] w-[20%]">
          <div className="bg-white mx-1 p-5 rounded mb-3 shadow-sm border">
            <h1 className="text-2xl font-bold">Blog Verse</h1>
            <h3 className="text-gray-600 mb-3">
              The place where people share and stay up-to-date
            </h3>
            <button
              className="text-indigo-600 border border-indigo-600 font-bold p-2 rounded w-full mb-3 focus:bg-indigo-600 focus:text-white focus:underline hover:bg-indigo-600 hover:underline hover:text-white"
              onClick={handleCreateAccount}
            >
              Create account
            </button>
            <Link to="/auth/signin">
              <button className="w-full p-2 rounded focus:bg-indigo-200 focus:underline hover:bg-indigo-100 hover:underline">
                Login
              </button>
            </Link>
          </div>
          <NavItems />
          <div className="flex gap-5 px-5">
            <Link to="https://github.com/vamsikrishnarh7">
              <AiFillGithub size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/durga-vamsi-krishna-pullapanthula-1b1615255/">
              <AiOutlineInstagram size={24} />
            </Link>
            <Link to="<AiOutlineInstagram size={20} />">
              <AiFillLinkedin size={24} />{" "}
            </Link>
          </div>
        </div>
        {/* Main content */}
        <div className="w-full lg:w-[50%]">
          <div className="flex gap-2 mb-2">
            <button className="text-lg hover:text-indigo-600 font-bold hover:bg-white py-1 px-2 rounded-md">
              Your Universe
            </button>
            <button className="text-gray-500 text-lg hover:text-indigo-600 hover:bg-white py-1 px-2 rounded-md">
              Explore
            </button>
          </div>
          {/* blogs abstract */}
          <div className="flex flex-col gap-2">
            <BlogAbstract />
            <BlogAbstract />
            <BlogAbstract />
            <BlogAbstract />
            <BlogAbstract />
            <BlogAbstract />
          </div>
        </div>
        {/* Aside content */}
      </div>
    </div>
  );
};

export default Home;
