import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black  mx-auto flex justify-between md:py-4 md:px-6 px-6 py-4 md:p-20 text-sm md:text-sm mt-12'>
      
        <div className='space-y-4'>
            
            <div className='flex flex-row gap-4 text-gray-400 text-2xl'>
                <a href=""><FaGithubSquare /></a>
                <a href=""><FaInstagram /></a>
            </div>

        </div>

        <p className='text-gray-400'>&copy; 2024 Imad AIT</p>

    </div>
  )
}

export default Footer
