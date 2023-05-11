import React from "react";
const SignIn = () => {
  return (
    <>
      <div className="w-[80%] md:w-[40%] md:p-10 mx-auto flex flex-col items-center mt-5">
        <h1 className="text-2xl md:text-3xl font-bold mb-10">
          Welcome to Blog Verse
        </h1>
        <button className=" flex bg-black text-white rounded-lg px-3 py-2 w-full items-center justify-center mb-5">
          <img src="../icons/github.svg" className="w-[28px]" />
          Continue with GitHub
        </button>
        <p className="mb-5">or continue with your email</p>
      </div>
      <form className="mx-[8%] md:w-[35%] md:mx-auto">
        <div className="flex flex-col">
          <label className="text-lg">Email</label>
          <input
            className="border rounded py-1 px-2 mb-2"
            type="email"
            name="email"
            required
          />
          <label className="text-lg">Password</label>
          <input
            className="border rounded mb-3 py-1 px-2"
            type="password"
            name="password"
            required
          />
          <button className="bg-indigo-600 text-white text-lg rounded py-1">
            SignIn
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
