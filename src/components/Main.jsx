import React from 'react'
import bgImg from '../assets/bg.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { LiaPython } from "react-icons/lia";
import { SiPython, SiDjango } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


const Main = () => {
  return (
    <>
    <img src={bgImg} alt="bg image" className=' bg-cover absolute w-full h-full object-cover mix-blend-soft-light pointer-events-none ' />
    
    

    <div id='main' className='grid md:grid-cols-[45%_10%_45%] h-screen'>
        {/*<img src={bgImg} alt="bg image" className='w-full h-screen object-cover' />   
        bg-cover w-full h-full absolute object-cover mix-blend-overlay pointer-events-none*/}
        
        <div className='w-full top-0 left-0   '>
            <div className='max-w-[700px] md:p-28 h-full w-full flex flex-col justify-center
                            lg:items-start items-center mt-4 md:mt-0 overflow-hidden'>
                <h1 className='md:text-6xl text-4xl text-white ml-8 mb-4 font-extrabold '>I'm <span className='text-teal-500 font-extrabold'>Imad AIT ALDJET</span></h1>
                <h2 className='flex md:text-4xl text-3xl text-white md:ml-8 mb-8 font-extrabold'>a
                    <TypeAnimation className='text-pink-700 font-extrabold'
                        sequence={[
                            "Fullstack Dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "Software Engineer",
                            1000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        speed={50}
                        style={{ paddingLeft: '10px' }}
                        repeat={Infinity}
                    />
                </h2>
                <p className='px-3 text-2xl m-4 md:text-2xl text-white'>
                    Using multiple technologies to bring about the best
                     performing websites and softwares delivered in an
                     all-encompassing package
                </p>

                <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-md font-bold text-gray-900
                         bg-gray-200 shadow-gray-600 m-4 p-3 cursor-pointer hover:bg-pink-700 hover:text-white hover:scale-110 ease-in duration-200'>
                            
                            <span className='pl-4 '>See more</span>
                </a>

            </div>
        </div>

        
        <div className=' hidden md:block md:mt-28'>
            <div style={{
                    transform: "rotateX(-25deg) rotateY(-25deg)",
                    transformStyle: 'preserve-3d',
            
                }}
                className='hidden md:block relative h-[400px] w[100px] '>
                
                <div style={{
                        transform: "translateX(-50px) translateY(50px)",
                        transformStyle: 'preserve-3d',
                    }}
                    className=' absolute inset-1 rounded-xl'>

                    <p className='text-gray-600/60 font-bold md:p-2 md:ml-12 md:mb-3 md:text-5xl'>My</p>
                    <p className='text-gray-600/60 font-bold md:p-2 md:ml-12 md:mb-3 md:text-5xl'>Tech</p>
                    <p className='text-gray-600/60 font-bold md:p-2 md:ml-12 md:mb-3 md:text-5xl'>Stack</p>
                </div>
            </div>
            
        </div>


        <div className='grid grid-cols-4 p-10 md:grid-cols-none md:p-0'>
            
            {/* for big screen */}

            <div 
                style={{
                    transform: "rotateX(-25deg) rotateY(-25deg)",
                    transformStyle: 'preserve-3d',
            
                }}
                className='hidden md:block relative h-[600px] w[400px] rounded-2xl bg-gradient-to-b from-white/10 backdrop-filter backdrop-blur-lg shadow-lg'>

                <div 
                    style={{
                        transform: "translateX(-50px) translateY(50px)",
                        transformStyle: 'preserve-3d',
                    }}
                    className='grid md:grid-cols-3 grid-cols-4 justify-center
                                items-center px-8 py-6  bg-gradient-to-b from-teal-200 shadow-lg absolute inset-1 rounded-xl'>


                    <div >
                        <BiLogoReact color='rgb(0, 255, 255)' size={80} className='mt-5 ml-6' />
                        <span className='absolute ml-10 mt-8 text-white'>REACT</span>
                    </div>

                    <div >
                        <TbBrandJavascript color='purple' size={80} className='mt-6 ml-6' />
                        <span className='absolute ml-6 mt-8 text-white'>JAVASCRIPT</span>
                    </div>

                    <div >
                        <RiTailwindCssFill className='mt-5 ml-5' color='rgb(0, 255, 255)' size={80} />
                        <span className='absolute ml-7 mt-8 text-white'>TAILWIND</span>
                    </div>

                    <div >
                        <SiPython className='mt-5 ml-5' color='yellow' size={80} />
                        <span className='absolute ml-9 mt-8 text-white'>PYTHON</span>
                    </div>


                    <div >
                        <SiDjango className='mt-5 ml-4' color='rgb(0, 255, 255)' size={80} />
                        <span className='absolute ml-9 mt-8 text-white'>DJANGO</span>
                    </div>

                    

                    

                    

                    <div >
                        <SiMongodb className='mt-5 ml-6' color='green' size={80} />
                        <span className='absolute ml-6 mt-8 text-white'>MONGODB</span>
                    </div>
                    

                    <div >
                        <GrMysql className='mt-6 ml-6' color='purple' size={80} />
                        <span className='absolute ml-10 mt-8 text-white'>MYSQL</span>
                    </div>

                    <div >
                        <FaGithub className='mt-5 ml-6' color='white' size={80} />
                        <span className='absolute ml-10 mt-8 text-white'>GITHUB</span>
                    </div>



                </div>
            </div>

            

            {/* for small screen */}

            <div className='md:hidden bg-gradient-to-b from-teal-500/50 w-16 h-16 rounded-full'>
                <SiPython className='mt-3 ml-3' color='yellow' size={40} />
            </div>

            <div className='md:hidden bg-gradient-to-b from-teal-500/50 w-16 h-16 rounded-full'>
                <SiDjango className='mt-3 ml-2' color='rgb(0, 255, 255)' size={40} />
            </div>

            <div className='md:hidden relative bg-gradient-to-b from-teal-500/50 rounded-full w-16 h-16 text-center overflow-hidden'>
                <BiLogoReact color='rgb(0, 255, 255)' size={40} className='mt-3 justify-center items-center inline-flex' />
            </div>

            <div className='md:hidden relative bg-gradient-to-b from-teal-500/50 rounded-full w-16 h-16 text-center overflow-hidden'>
                <TbBrandJavascript color='purple' size={40} className='mt-3 justify-center items-center inline-flex' />
            </div>

            <div className='md:hidden relative bg-gradient-to-b from-teal-500/50 rounded-full w-16 h-16 text-center overflow-hidden'>
                <RiTailwindCssFill className='mt-3 ml-3' color='rgb(0, 255, 255)' size={40} />
            </div>

            <div className='md:hidden relative bg-gradient-to-b from-teal-500/50 rounded-full w-16 h-16 text-center overflow-hidden'>
                <SiMongodb className='mt-3 ml-3' color='green' size={40} />
            </div>

            <div className='md:hidden relative bg-gradient-to-b from-teal-500/50 rounded-full w-16 h-16'>
                <GrMysql className='mt-3 ml-4' color='purple' size={40} />
            </div>

            <div className='md:hidden relative bg-gradient-to-b from-teal-500/50 rounded-full w-16 h-16 text-center overflow-hidden'>
                <FaGithub className='mt-3 ml-3' color='white' size={40} />
            </div>
                    
        </div>
      
    </div>
    
    </>
  )
}

export default Main
