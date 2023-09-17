import React, { useState } from "react";
import ProfilePicModal from "../components/ProfilePicModal";

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  // console.log("open modal : ",openModal);
  return (
    <div className="my-5 border rounded-lg shadow-sm flex flex-col text-black md:w-[50%] mx-auto items-center">
      <h1 className="my-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600">
        Create an Account
      </h1>
      <hr className="w-48 h-1 rounded my-2 bg-gray-100 mx-auto" />
      <form className="mb-[20px] flex flex-col items-center">
        {/* select avatar modal */}
        <div className=" py-3 px-10 flex items-center gap-2">
          <img
            src="../../user-avatars/1.avif"
            className="w-[75px] rounded-full"
          />
          <button
            className="border border-indigo-600 rounded-sm py-1 px-2 text-indigo-600 font-semibold"
            onClick={(e) =>{e.preventDefault(); setOpenModal(true)}}
          >
            Choose avatar
          </button>
        </div>
        {openModal && <ProfilePicModal closeModal={setOpenModal} />}
        {/* user details */}
        <div className="flex flex-col  px-3 sm:w-[50%]">
          <div className="flex flex-col sm:flex-row">
            <div>
              <label>First Name</label>
              <input
                type="text"
                className="border-2 rounded-md mx-2 sm:mx-0 my-2 px-2"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                className="border-2 rounded-md mx-2 sm:ml-0 sm:mr-2 my-2 px-2"
              />
            </div>
          </div>
          {/*area of interests*/}
          <div>
            <h1 className="text-[20px] font-bold">Area of interest</h1>
            <div className="flex gap-5 flex-wrap border rounded-md">
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Web Development</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">ReactJs</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">JavaScript</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Python</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">SpringBoot</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">AWS</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Cloud Computing</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Open Source</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Node</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Android</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Database</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Data Science</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Algorithms</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Cyber Security</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Machine Learning</div>
              </label>
              <label className="flex">
                <input type="checkbox" name="areaOfInterest" />
                <div className="rounded-md px-2">Community</div>
              </label>
            </div>
          </div>
          {/* signup credentials */}
          <div className="mb-10">
            <div className="flex flex-col">
              <label className="font-bold text-xl">Email</label>
              <input type="email" className="border rounded-md px-2 py-1" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl">Password</label>
              <input type="password" className="border rounded-md px-2 py-1" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl">Confirm Password</label>
              <input type="password" className="border rounded-md px-2 py-1" />
            </div>
          </div>
          <button className="border-2 border-indigo-600 py-2">Create Account</button>
        </div>

      </form>
    </div>
  );
};

export default SignUp;
