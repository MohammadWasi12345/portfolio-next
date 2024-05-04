import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div id='Contact'>
            <section className="text-gray-600 body-font relative bg-gradient-to-r from-gray-800 to-emerald-900">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl uppercase title-font mb-4 font-extrabold text-teal-100 italic">
                            Contact Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-teal-300 italic">
                            Lets connect and collaborate! In the Contact section, you will find the gateway to reaching out and starting a conversation.
                        </p>
                    </div>

                    <div className="lg:w-full  md:w-2/3 ">
                        <div className="flex flex-wrap -m-2">
                            <form className='mx-auto w-auto'
                                action="https://formspree.io/f/myyrlybg"
                                method="POST">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm  text-teal-300 italic">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm  text-teal-300 italic">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="subject" className="leading-7 text-sm  text-teal-300 italic">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="Subject"
                                            name="Subject"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="leading-7 text-sm  text-teal-300 italic"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
                                        Submit
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </section >

        </div >
    )
}

export default Contact