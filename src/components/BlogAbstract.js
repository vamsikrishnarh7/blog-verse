import React from 'react'
import {RiChat1Line} from 'react-icons/ri'
import {BsBookmark}  from 'react-icons/bs'
const BlogAbstract = () => {
  return (
    <div className='bg-white border-2 p-5 lg:rounded-md max-w-[580px]'>
      <div className='mb-2'>
        {/* author information */}
        <img src='../icons/blog-verse.svg' className='w-[30px] rounded-full float-left mr-2' />
        <h3 className='text-sm font-medium text-gray-700'>Elon Musk</h3>
        <p className='text-[12px]'>May 14</p>
      </div>
      <div className='lg:pl-[35px]'>
        <h1 className='text-2xl font-bold mb-1'>Javascript Array methods</h1>
        {/* hashtag container */}
        <div className='mb-2'>
            <button className= 'text-[14px] p-1 hover:ring-1 hover:bg-indigo-200 rounded-md'>#javascript</button>
            <button className= 'text-[14px] p-1 hover:ring-1 hover:bg-indigo-200 rounded-md'>#javascript</button>
            <button className= 'text-[14px] p-1 hover:ring-1 hover:bg-indigo-200 rounded-md'>#javascript</button>
            <button className= 'text-[14px] p-1 hover:ring-1 hover:bg-indigo-200 rounded-md'>#javascript</button>
                       
        </div>
        {/* comments, reactions */}
        <div className='flex justify-between'>
            <button className='flex items-center gap-2 hover:bg-[#f5f5f5] p-1 rounded-md'>
                <RiChat1Line />
                <p>Add comment</p>
            </button>
            <div className='flex items-center gap-2'>
                <p className='text-gray-700 text-sm'>5 min read</p>
                <BsBookmark />
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogAbstract
