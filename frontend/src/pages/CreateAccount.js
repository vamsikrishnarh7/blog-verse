import React from "react";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
const CreateAccount = () => {
  return (
    <div className="w-[80%] md:w-[40%] md:p-10 mx-auto flex flex-col items-center mt-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-10">
        Welcome to Blog Verse
      </h1>
      <button className=" flex bg-black text-white rounded-lg px-3 py-2 w-full items-center justify-center mb-5">
        <img src="../icons/github.svg" className="w-[28px]" />
        Sign up with GitHub
      </button>
      <button className=" flex rounded-lg px-3 py-2 w-full items-center justify-center mb-5 border-2">
        <FiMail size={20} />
        <Link to="/signup">Sign up with Email</Link>
      </button>
      <p>
        Already have an account?{" "}
        <Link to="/auth/signin">
          <button className="text-indigo-600">Log in</button>
        </Link>
      </p>
    </div>
  );
};

export default CreateAccount;
