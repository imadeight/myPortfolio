import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <>
    <div id='contact' className='max-w-[1300px] mx-auto my-8 md:my-12 text-3xl md:text-3xl flex justify-center items-center'>
        <h1 className='text-white font-bold glass md:p-5 p-2'>Contact Me</h1>
    </div>


    <div className='grid md:grid-cols-2 place-items-center glass max-w-[1300px] md:mx-auto mx-4 mb-5 px-6'>
        
        <ul className='my-auto pr-6'>
            <li className='flex'>
                <AiFillLinkedin className='w-[70px] h-auto text-gray-300' />
                <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>Contact</h3>
                    <p className='text-gray-400'>Mobile: 0760074150</p>
                    <p className='text-gray-400 text-sm'>Email: <br />imad.aitaldjet@gmail.com</p>
                </div>
            </li>
            <li className='flex'>
                <AiFillGithub className='w-[70px] h-auto text-gray-300' />
                <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>Working Hours</h3>
                    <p className='text-gray-400'>Mo-Fri: 9am-5pm</p>
                    <p className='text-gray-400'>Sat-Sun: 10am-3pm</p>
                </div>
            </li>
        </ul>

        <form action='https://getform.io/f/jbwxmpga' method="POST" id='form' className='max-w-6xl p-5 md:p-12'>
            <input type="text" id='name' placeholder='Your Name...' name='name'
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
            />

            <input type="text" id='email' placeholder='Your Email...' name='email'
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4' 
            />

            <textarea id='textarea' cols="30" rows="4" placeholder='Your Message...' name='textarea'
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'>

            </textarea>

            <button type='submit' className='bg-pink-950 w-full py-3 rounded-md text-gray-200 font-semibold text-xl'>
                Send Message
            </button>

        </form>

      

        

    </div>
    </>
  )
}

export default Contact
