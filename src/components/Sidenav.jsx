import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    
    const toggleNav = () => {
        setNav(!nav)
    }


    return (
        
        <div>
            <AiOutlineMenu onClick={toggleNav} className='fixed  top-5 right-5 z-[99] md:hidden text-pink-700' />
            {
                nav ? (
                        <div className='fixed w-full h-screen bg-gray-400 flex flex-col justify-center items-center z-20'>
                            <a onClick={toggleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-md
                            bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                                
                                <AiOutlineHome size={20} />
                                <span className='pl-4 '>Home</span>
                            </a>

                            <a onClick={toggleNav} href="#Work" className='w-[75%] flex justify-center items-center rounded-full shadow-md
                            bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                                
                                <GrProjects size={20} />
                                <span className='pl-4 '>Work</span>
                            </a>

                            <a onClick={toggleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-md
                            bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                                
                                <AiOutlineMail size={20} />
                                <span className='pl-4 '>Contact</span>
                            </a>

                            <a onClick={toggleNav} href="Imad AIT ALDJET.pdf" className='w-[75%] flex justify-center items-center rounded-full shadow-md
                            bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                                
                                <BsPerson size={20} />
                                <span className='pl-4 '>Resume</span>
                            </a>
                        </div>
                )
                : (
                    ''
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-md bg-gray-100
                     shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                    </a>

                    <a href="#Work" className='rounded-full shadow-md bg-gray-100
                     shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                    </a>

                    <a href="#contact" className='rounded-full shadow-md bg-gray-100
                     shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                    </a>

                    <a href="Imad AIT ALDJET.pdf" className='rounded-full shadow-md bg-gray-100
                     shadow-gray-600 m-2 p-4 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Sidenav
