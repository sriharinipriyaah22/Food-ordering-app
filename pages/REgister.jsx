import React from 'react'
import pro from '../assets/profile.png'
const REgister = () => {
  return (
    <div className="register">
      <div className="w-full mx-auto pt-[16vh]">
        <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80
            lg:w-max mx-auto flex flex-col items-center rounded-md px-8 py-5">
                <label htmlFor='file-upload' className='custom-file-upload'>
                  <img src={pro} alt="" className='h-32 bg-contain rounded-full mx-auto
                  cursor-pointer'/>

                </label>
                <label className='block text-center text-gray-900 text-base mb-2'>
                  Profile Picture 
                </label>
                <input type="file" label="Image" name="myfile" id="file-upload" className='hidden'
                accept='.jpeg .png .jpg'/>
                <div className="mb-3">
    <label className='block text-gray-700 text-sm mb-2' htmlFor='name'>
        Name

    </label>
    <input type="text" placeholder="Enter your Name" name="name" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>
<div className="mb-3">
    <label className='block text-gray-700 text-sm mb-2'>
        Email

    </label>
    <input type="email" placeholder="Enter your email" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>
<div className="flex flex-col md:flex-row md:gap-4">
<div className="mb-3">
    <label className='block text-gray-700 text-sm mb-2'>
         Password

    </label>
    <input type="password" placeholder='************' name="confirm password" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>

<div className="mb-3">
    <label className='block text-gray-700 text-sm mb-2'>
        Confirm Password

    </label>
    <input type="password" placeholder='************' name="confirm password" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>
</div>

        </form>
      </div>
    </div>
  )
}

export default REgister