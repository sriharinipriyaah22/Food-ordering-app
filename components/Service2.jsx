import React from 'react'
import hh from '../assets/ui.jpg'
const Service2 = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto py-[2vh]">
            <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
<div className="w-full md:w-[32rem] flex flex-col space-y-6 ">
                    <div className="text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl">
                        We are <span className="text-[#f54748]">more</span> than 
                        <span className="text-[#40E0D0]"> multiple</span> service
                    </div>
                    <div className="lg:text-lg text-[#191919] md:text-base text-sm">
                    "Welcome to our restaurant, where every dish is crafted with passion and served with a smile. Indulge in a culinary
                     journey filled with flavors that will tantalize your taste buds."
                    </div>
                    <div className="flex gap-8 iems-center">
                        <button className="bg-[#d5e9f3] active:scale-90 transtion duration-150 transform
                        hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-black">
                            About us
                        </button>
                    </div>
                </div>
                <img src={hh} alt="" className='h-[20rem] mx-auto rounded-full justify-end'/>

                </div>
               
        </div>
    </div>
  
    )
}

export default Service2