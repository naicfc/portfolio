import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaPhone,
  FaLocationArrow,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full py-16 pt-20 px-8 lg:px-32 xl:px-48 dark:bg-[#102A43] dark:text-white">
      <div className="max-w-[1240px] m-auto w-full">
        <p className="text-xl mb-2 tracking-widest uppercase font-semibold text-gray-700 text-center dark:text-white">
          Contact
        </p>
        <p className="text-gray-600 text-center mb-8 dark:text-white">
          Fill out the form and i will reach out as soon as possible.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <h2 className="lg:text-4xl font-normal mb-2 text-gray-700 dark:text-white">
                Let's chat.<br></br> Tell me about your project.
              </h2>
              <p className="text-gray-600 mb-6 dark:text-white">
                Let's create something together.
              </p>
              <div className="pt-4">
                <p className="uppercase font-bold tracking-widest text-gray-600 dark:text-white">
                  connect with me.
                </p>
                <div className="my-4">
                  <div className="flex items-center gap-5 mb-4">
                    <FaPhone />
                    <p className="text-gray-600 dark:text-white">
                      +233 557 569 078
                    </p>
                  </div>
                  <div className="flex items-center gap-5 mb-4">
                    <AiOutlineMail />
                    <p className="text-gray-600 dark:text-white">
                      godfrednai@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-5 mb-4">
                    <FaLocationArrow />
                    <p className="text-gray-600 dark:text-white">
                      Accra, Ghana
                    </p>
                  </div>
                  <div className="flex items-center gap-5 mb-4">
                    <FaInstagram />
                    <p className="text-gray-600 dark:text-white">yo.freddie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <form
              action="https://formsubmit.co/406cefd417c7aaaaeaa7788497672e7d"
              method="post">
              <div className="flex flex-col gap-2">
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="You have a mail from your website"
                />
                <label
                  htmlFor="name"
                  className="font-normal text-gray-600 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tyrion Lannister"
                  className="bg-[#ecf0f3] border-gray-600 py-2 px-6 border-2 dark:border-white dark:bg-[#102A43]
                  rounded-lg focus:border-action w-full"
                  required
                />
                <label
                  htmlFor="email"
                  className="font-normal text-gray-600 dark:text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="tyrionlannister@westeros.com"
                  className="bg-[#ecf0f3] border-gray-600 py-2  px-6 border-2 dark:border-white dark:bg-[#102A43]
                  rounded-lg focus:border-action "
                  required
                />
                <label
                  htmlFor="message"
                  className="font-normal text-gray-600 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  cols={50}
                  placeholder="Never forget what you are. The rest of the world will not. Wear it
                  like armor, and it can never be used to hurt you."
                  className="bg-[#ecf0f3] border-gray-600 p-6 border-2 rounded-lg dark:border-white dark:bg-[#102A43]"
                  required></textarea>
                <button
                  type="submit"
                  className="border-none mt-4 md:w-3/6 text-center border-2 font-semibold p-3 w-full text-sm lg:text-lg rounded-md cursor-pointer
                  hover:scale-105 hover:-translate-y1 hover:shadow-lg hover:-translate-y-[2px transition-all duration-200 bg-[#4169e1] ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
