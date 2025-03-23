import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-[#03001417] shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-10 fixed top-0 shadow-lg '>
         <div className='flex items-center justify-between w-full h-full flex-row m-auto px-[10px]'>
<a href="#" className='h-auto w-auto flex flex-row items-center '>
    <Image src={'/NavLogo.png'} width={70} height={70} alt='logo' className='h-auto w-auto cursor-pointer hover:animate-slowspin' />
</a>
         </div>
    </div>
  )
}

export default Navbar