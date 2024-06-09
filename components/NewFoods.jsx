import React from 'react'
import {FaHeart, FaStar} from "react-icons/fa"

const NewFoods = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
    <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center
        text-[#2e2e2e] lg:text-4xl">
            New Food <span className='text-[#f54748]'>Foods</span>
        </div>
        <div className="grid py-6 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1">
            <div className="food-card bg-red-500/10 rounded-full 
            flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtJM2Nm4oFVI7I59YY3FSj-0H3FdT1FPCmg&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi6kauIl34mc7KeY0R5Mzo0xfJNhLh5dLoA&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi6kauIl34mc7KeY0R5Mzo0xfJNhLh5dLoA&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card bg-red-500/10 rounded-full flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi6kauIl34mc7KeY0R5Mzo0xfJNhLh5dLoA&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card bg-red-500/10 rounded-full 
            flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtJM2Nm4oFVI7I59YY3FSj-0H3FdT1FPCmg&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card bg-red-500/10 rounded-full 
            flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtJM2Nm4oFVI7I59YY3FSj-0H3FdT1FPCmg&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card bg-red-500/10 rounded-full 
            flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtJM2Nm4oFVI7I59YY3FSj-0H3FdT1FPCmg&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
<div className="food-card bg-red-500/10 rounded-full 
            flex flex-col cursor-pointer itms-center p-5">
                <div className="relative mb-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtJM2Nm4oFVI7I59YY3FSj-0H3FdT1FPCmg&s" alt="" srcset=""/>
                <div className="absolute top-2 left-2">
                    <button className="shadow-sm text-white bg-pink-500 hover:bg-black-700
                    cursor-pointer p-5 rounded-full relative">
                        <FaHeart className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2'/>
                    </button>

                </div>
                <div className="absolute bottom-2 right-2">
                    <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
                    cursor-pointer p-3 h-10 w-10 text-xl font-bold rounded-full relative">
                        <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2">50</div>
                    </button>
                </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-xl text-center font-bold text-[#f54748]">
                        Ice cream
                    </p>
                    <div className="flex text-sm space-x-2 cursor-pointer">
                        <span className="font-normal text-[#fdc55e]">4.3</span>
                        <FaStar size={16} className='text-[#fdc55e]'/>
                        <span className="font-medium">(4)</span>
                    </div>
                    
                </div>
                <button className='bg-[#FFC0CB] active:scale-90 transition duration-150 transform
    hover:shadow-xl shadow-md rounded-full px-4 py-2 text-xl font-medium text-white'>Order now</button>
</div>
        </div>
    </div>
</div>


    )
}

export default NewFoods