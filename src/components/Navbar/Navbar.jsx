import React, { useState } from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';



import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='p-5 flex justify-between items-center'>
      <img src={assets.logo} alt="" className="h-52" />
      <ul className="flex list-none gap-5 text-sm">
        <li
          className={`font-sans text-xl text-zinc-500 pb-0.5 cursor-pointer ${menu === "home" ? "text-zinc-800 border-b-2 border-zinc-800" : ""}`}
          onClick={() => setMenu("home")}
        >
          home
        </li>
        <li
          className={`font-sans text-xl text-zinc-500 pb-0.5 cursor-pointer ${menu === "menu" ? "text-zinc-800 border-b-2 border-zinc-800" : ""}`}
          onClick={() => setMenu("menu")}
        >
          menu
        </li>
        <li
          className={`font-sans text-xl text-zinc-500 pb-0.5 cursor-pointer ${menu === "mobile-app" ? "text-zinc-800 border-b-2 border-zinc-800" : ""}`}
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </li>
        <li
          className={`font-sans text-xl text-zinc-500 pb-0.5 cursor-pointer ${menu === "contact us" ? "text-zinc-800 border-b-2 border-zinc-800 " : ""}`}
          onClick={() => setMenu("contact us")}
        >
          contact us
        </li>
      </ul>
      <div className="flex items-center gap-10">

        <MagnifyingGlassIcon className="h-10 text-[#DB5300] cursor-pointer" />
        <ShoppingCartIcon className="h-10 text-[#DB5300] cursor-pointer" />

        <button className='cursor-pointer ease-out duration-300 text-base hover:bg-[#DB5300] text-zinc-500 tex-justify border-zinc-600 border-solid border bg-transparent p-3 w-32 rounded-full'>Sign in</button>

      </div>
    </div>
  )
}

export default Navbar