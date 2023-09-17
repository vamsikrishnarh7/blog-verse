import React from 'react'
import {IoClose} from 'react-icons/io5'
const ProfilePicModal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer bg-white border sm:w-[500px] sm:h-[500px] mx-auto my-5 rounded-sm shadow-sm py-5 px-10 flex flex-col'>
        <button className='self-end' onClick={() => closeModal(false)}><IoClose size={30} /></button>
        <div>
            <h1 className='text-2xl font-bold'>Choose your avatar</h1>
        </div>      
        <div className='h-[350px] p-2 my-4 flex gap-5 flex-wrap overflow-scroll scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-200'>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/1.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/2.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/3.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/4.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/5.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/6.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/7.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/8.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/9.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/10.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/11.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/12.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/13.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/14.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/15.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/16.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/17.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/18.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/19.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/20.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/21.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/22.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/23.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/24.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/25.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/26.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/27.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/28.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/29.avif' alt="profile-avatar" />
            </button>
            <button className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full focus:ring focus:ring-indigo-600'>
                <img className=' rounded-full' src='./user-avatars/30.avif' alt="profile-avatar" />
            </button>
           
        </div>      
        <div className='flex gap-2 self-end modalFooter my-2'>
            <button className='bg-red-600 text-white font-semibold py-1 px-2 rounded' onClick={() => closeModal(false)}>Cancle</button>
            <button className='bg-indigo-600 text-white font-semibold py-1 px-2 rounded' onClick={() => closeModal(false)}>Confirm</button>
        </div>      
      </div>
    </div>
  )
}

export default ProfilePicModal
