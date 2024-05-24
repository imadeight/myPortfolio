import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa6'

const Header = () => {
  return (
    <>
    
    <div id="main" className=' flex flex-row justify-between pl-3 pt-4 pb-4 w-full bg-black'>
      
      <div className='max-w-[300px] gap-4 flex items-center justify-between'>
        <FaTwitter size={20} className='cursor-pointer text-white hover:text-pink-700' />
        <FaFacebookF size={20} className='cursor-pointer text-white hover:text-pink-700' />
        <FaInstagram size={20} className='cursor-pointer text-white hover:text-pink-700' />
        <FaLinkedinIn size={20} className='cursor-pointer text-white hover:text-pink-700' />        
      </div>
      
      <div className='absolute right-16 flex flex-row gap-4'>
        <BsFillMoonStarsFill size={20} className='cursor-pointer text-white hover:text-pink-700 ' />
        <FaGlobe size={20} className='cursor-pointer text-white hover:text-pink-700 ' />
      </div>
      
    </div>
    </>
  )
}

export default Header
