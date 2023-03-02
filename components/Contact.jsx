import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaTwitter,FaGithub} from 'react-icons/fa'

function Contact() {
  return (
    <div id='contact' className='w-full py-16 pt-20 dark:bg-[#031629] dark:text-white'>
        <div className='max-w-[1240px] m-auto px-2 w-full'>
          <p className='text-xl mb-2 tracking-widest uppercase font-semibold text-[#4169e1] text-center dark:text-white'>Contact</p>
          <p className='text-gray-600 text-center mb-8 dark:text-white'>Fill out the form and i will reach out as soon as possible.</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8 '>
              <div className='w-full  p-8'>
                <div className="flex flex-col gap-2 ">
                    <h2 className='lg:text-5xl mb-2 text-gray-700 dark:text-white'>Let's chat.<br></br> Tell me about your project.</h2>
                    <p className='text-gray-600 mb-8 dark:text-white'>Let's create something together.</p>
                    <div className='pt-4'>
                      <p className='uppercase font-bold tracking-widest text-[#4169e1]'>connect with me.</p>
                      <div className='flex items-center justify-start my-4 w-full '>
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>
                          <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>
                          <FaGithub className=''/>
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>
                          <FaTwitter className='text-blue' />
                        </div>
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 mr-8 cursor-pointer hover:scale-105 ease-in duration-300'>
                          <AiOutlineMail />
                        </div>                
                      </div>
                    </div>
                </div>
              </div>
              <div className='p-4 w-[100%]'>
                <form action="https://formsubmit.co/406cefd417c7aaaaeaa7788497672e7d" method="post">
                  <div className="flex flex-col gap-4">
                  <input type='hidden' name="_captcha" value="false" />
                  <input type='hidden' name='_subject' value='You have a mail from your website'/>
                  <label htmlFor='name' className='font-semibold text-gray-600 dark:text-white'>Name</label>
                  <input type="text" name="name" id="name" placeholder="Tyrion Lannister" className='bg-[#ecf0f3] border-gray-600 py-2 px-6 border-2 dark:border-white dark:bg-[#031629]
                  rounded-lg focus:border-action w-full' required/>
                  <label htmlFor='email' className='font-semibold text-gray-600 dark:text-white'>E-mail</label>
                  <input type="email" name="email" id="email" placeholder="tyrionlannister@westeros.com" className='bg-[#ecf0f3] border-gray-600 py-2  px-6 border-2 dark:border-white dark:bg-[#031629]
                  rounded-lg focus:border-action ' required/>
                  <label htmlFor='message' className='font-semibold text-gray-600 dark:text-white'>Message</label>
                  <textarea id="message" name='message' rows={3} cols={50} placeholder="Never forget what you are. The rest of the world will not. Wear it
                  like armor, and it can never be used to hurt you." className='bg-[#ecf0f3] border-gray-600 p-6 border-2 rounded-lg dark:border-white dark:bg-[#031629]' required></textarea>
                  <button type='submit' className='border-none mt-4 md:w-3/6 text-center border-2 font-semibold p-3 w-full text-sm lg:text-lg rounded-md cursor-pointer
                  hover:scale-105 hover:-translate-y1 hover:shadow-lg hover:-translate-y-[2px transition-all duration-200 bg-[#4169e1] '>Send</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact