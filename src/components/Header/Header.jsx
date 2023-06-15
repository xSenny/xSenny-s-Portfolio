import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import React, {useEffect, useRef} from 'react'

const Header = () => {

  const trigger = useScrollTrigger();

  return (
    <Slide className='hidden sm:block' appear={false} direction="down" in={!trigger}>
      <AppBar position='sticky'>
      <Toolbar>
      <header className='hidden sm:flex w-full h-[80px] leading-[80px] items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">X</span>
            <div className='leading-[20px]'>
              <h2 className='text-xl text-smallTextColor font-[700]'>xSenny_</h2>
              <p className='text-smallTextColor text-[16px] font-[500]'>personal</p>
            </div>
          </div>
          <div className='menu'>
            <ul className='flex items-center gap-10'>
              <li><a className='text-smallTextColor font-[600]' href="#about">About</a></li>
              <li><a className='text-smallTextColor font-[600]' href="#services">Services</a></li>
              <li><a className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a></li>
              <li><a className='text-smallTextColor font-[600]' href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]
            hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
            <i class="ri-send-plane-line"></i> Let's Talk
            </a>
            <span className='text-2xl cursor-pointer text-smallTextColor md:hidden'><i class="ri-menu-line"></i></span>
          </div>
        </div>
      </div>
    </header>
      </Toolbar>
    </AppBar>
    </Slide>
  )
}

export default Header
