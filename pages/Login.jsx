import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/rr.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login">
        <div className="h-screen pt-[14vh]">
            <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80
            lg:w-max mx-auto flex flex-col items-center rounded-md px-8 py-5">
                <NavLink to="/">
                    <img src={logo} alt=" " className='logo mb-6 cursor-pointer text-center ' />
                </NavLink>
<div className="mb-4">
    <label className='block text-gray-700 text-sm mb-2' htmlFor='email'>
        Email

    </label>
    <input type="email" placeholder="Enter your email" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>
<div className="mb-4">
    <label className='block text-gray-700 text-sm mb-2' htmlFor='email'>
        Password

    </label>
    <input type="password" placeholder='************' name="password" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white
mx-auto text-center">Sign In</button>

<Link to="/register" className="text-[#fdc55e] text-center font-semibold w-full mb-3 py-2 
px-4 rounded">
    Create an Account

</Link>
<h2 class="text-[42px] md:text-[92px] text-center font-extrabold leading-none text-transparent bg-clip-text max-w-[677px] md:max-w-[747px] mx-auto mb-6 bg-[linear-gradient(90deg,#677BE5_6.5%,#78D9E8_65.69%,#92D74D_104.88%)] tracking-[-0.76px] md:tracking-[-1.84px]">Grow your brand.</h2>
            </form>
        </div>
    </div>
    )
}

export default Login