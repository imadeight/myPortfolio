import React from 'react'
import am from '../assets/am.png'
import pwd from '../assets/pwd.png'
import amado from '../assets/amado.png'
import { SiPython, SiDjango } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

{/* first div has max-w-[1300px] and to debug I'll add bg-red-300 */}

const Work = () => {
  return (  
    <>
    <div id='Work' className='max-w-[1300px] mx-auto my-3 md:my-12 text-3xl md:text-3xl flex justify-center items-center'>
        <h1 className='text-white font-bold glass md:p-5 p-2'>My Work</h1>
    </div>
    
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center'>
      
        {/*<div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6'>
            <SiDjango color='rgb(0, 255, 255)' />
            <SiPython color='yellow' />
            <TbBrandJavascript color='purple' />
            <RiTailwindCssFill color='rgb(0, 255, 255)' />
            <BiLogoReact color='rgb(0, 255, 255)' />
            <SiMongodb color='green' />
            <FaGithub color='white' />
            <GrMysql color='purple' />

        </div>*/}

        

    {/* Alternate img/text and text/img */}

        <div  className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
                            blur opacity-25 groupe-hover:opacity-100 transition duration-300'>
            </div>
            <div className='relative w-full p-4 bg-white bg-oapcity-10 backdrop-blur-lg rounded-lg'>
                    <img className='rounded-lg md:max-w-[500px]' src={amado} alt="project img" />
            </div>
        </div>
        <div className='p-6 hidden md:block'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Amado Furniture</h2>
            <p className='text-gray-300 mb-4'>
                An E-commerece website for Amado Furniture built using Django
                and ReactJs for the front-end styled with Tailwind Css managing 
                a SqlLite database with secure transactions built with Stripe.
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <SiDjango color='rgb(0, 255, 255)' />
                <SiPython color='yellow' />
                <TbBrandJavascript color='purple' />
                <RiTailwindCssFill color='rgb(0, 255, 255)' />
                <BiLogoReact color='rgb(0, 255, 255)' />
                <GrMysql color='purple' />
            </div>

        </div>




        <div className='p-6 hidden md:block'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>O-R Electromenager</h2>
            <p className='text-gray-300 mb-4'>
                A portal for a small business about reparing home appliances such as freezers
                and televisons built entirely with ReactJS and Tailwind Css to be fully responsive.
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                
                <TbBrandJavascript color='purple' />
                <RiTailwindCssFill color='rgb(0, 255, 255)' />
                <BiLogoReact color='rgb(0, 255, 255)' />
                
            </div>

        </div>
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
                            blur opacity-25 groupe-hover:opacity-100 transition duration-300'>
            </div>
            <div className='relative w-full p-4 bg-white bg-oapcity-10 backdrop-blur-lg rounded-lg'>
                    <img className='rounded-lg md:max-w-[500px]' src={am} alt="project img" />
            </div>
        </div>






        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
                            blur opacity-25 groupe-hover:opacity-100 transition duration-300'>
            </div>
            <div className='relative w-full p-4 bg-white bg-oapcity-10 backdrop-blur-lg rounded-lg'>
                    <img className='rounded-lg md:max-w-[500px]' src={pwd} alt="project img" />
            </div>
        </div>
        <div className='p-6 hidden md:block'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>PWD Management</h2>
            <p className='text-gray-300 mb-4'>
                PWD Management is a web-application for password generation, storage and management
                built with Django and ReactJS and styled with Tailwind Css utilising a MongoDB database
                for password's storage of users.
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <SiDjango color='rgb(0, 255, 255)' />
                <SiPython color='yellow' />
                <TbBrandJavascript color='purple' />
                <RiTailwindCssFill color='rgb(0, 255, 255)' />
                <BiLogoReact color='rgb(0, 255, 255)' />
                <SiMongodb color='green' />
                
            </div>

        </div>

      
    </div>
    </>
  )
}

export default Work
