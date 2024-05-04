import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return (
        <div id='Skills'>
            <section className="text-gray-600 bg-gradient-to-r from-gray-800 to-emerald-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl uppercase text-2xl text-teal-100 font-extrabold text-center title-font italic mb-4">
                            my skills
                        </h1>

                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center hover:bg-gray-800">
                                <Image
                                    alt='logo'
                                    height={100}
                                    width={100}
                                    src={require("../../../public/assets/pictures/html.png")}
                                    className='w-12 rounded-xl' />
                                <span className="title-font uppercase ml-3 font-medium text-teal-300">
                                    html
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center hover:bg-gray-800">
                                <Image
                                    alt='logo'
                                    height={100}
                                    width={100}
                                    src={require("../../../public/assets/pictures/css.png")}
                                    className='w-12 rounded-xl' />
                                <span className="title-font uppercase ml-3 font-medium text-teal-300">
                                    css
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center hover:bg-gray-800">
                                <Image
                                    alt='logo'
                                    height={100}
                                    width={100}
                                    src={require("../../../public/assets/pictures/js.png")}
                                    className='w-12 rounded-xl' />
                                <span className="title-font uppercase ml-3 font-medium text-teal-300">
                                    javascript
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center hover:bg-gray-800">
                                <Image
                                    alt='logo'
                                    height={100}
                                    width={100}
                                    src={require("../../../public/assets/pictures/typescript.png")}
                                    className='w-12 rounded-xl' />
                                <span className="title-font uppercase ml-3 text-teal-300 font-medium">
                                    typescript
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center hover:bg-gray-800">
                                <Image
                                    alt='logo'
                                    height={100}
                                    width={100}
                                    src={require("../../../public/assets/pictures/next.webp")}
                                    className='w-12 rounded-xl' />
                                <span className="title-font text-teal-300 uppercase ml-3 font-medium">
                                    next js
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center hover:bg-gray-800">
                                <Image
                                    alt='logo'
                                    height={100}
                                    width={100}
                                    src={require("../../../public/assets/pictures/tailwind.png")}
                                    className='w-12 rounded-xl' />
                                <span className="title-font ml-3 text-teal-300 uppercase font-medium">
                                    tailwind css / bootstrap
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Skills