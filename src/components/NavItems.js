import React from "react";
import { FcHome,FcIdea } from "react-icons/fc";
const NavItems = () => {
  return (
    <>
      <div className="mx-5 flex flex-col gap-5 mb-10">
        <button className="flex items-center gap-2 focus:bg-indigo-200 w-full py-2  rounded">
          <FcHome size={25} />
          <p>Home</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-indigo-200 w-full py-2  rounded">
          <img src="./icons/tag-icon.png" className="w-[25px]" />
          <p>Tags</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-indigo-200 w-full py-2  rounded">
          <img src="./icons/blog-verse.svg" className="w-[25px] rounded" />
          <p>About</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-indigo-200 w-full py-2  rounded">
          <FcIdea size={25} />
          <p>FAQ</p>
        </button>
      </div>
    </>
  );
};

export default NavItems;
