import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='h-20 bg-green-900 flex justify-between px-5 items-center text-amber-50'>
      <div className="log font-bold text-2xl">
         <Link href="/"><li>BitLinks</li></Link>
      </div>
      <ul className='flex justify-center items-center gap-4'>
        <Link className='hover:font-bold' href="/"><li>Home</li></Link>
        <Link className='hover:font-bold' href="/about"><li>About</li></Link>
        <Link className='hover:font-bold' href="/shorten"><li>Shorten</li></Link>
        <Link className='hover:font-bold' href="/contact"><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten" ><button className='bg-green-500 hover:text-red-500 rounded-xl cursor-pointer p-3 py-1 font-bold shadow-lg'>Try Now</button></Link>
          <Link href="/github" ><button className='bg-green-500 hover:text-red-500 rounded-xl cursor-pointer p-3 py-1 font-bold shadow-lg'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar