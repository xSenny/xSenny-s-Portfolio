import React from 'react'
import '../../App.css'
import clipboardCopy from 'clipboard-copy';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-[#12141e]' pt-12>
      <div className="container py-4">
        <div className="items-center sm:flex justify-content md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] mt-10'>Do you want to make beautiful products?</h2>
            <a href="#contact">
                  <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-fill"></i> Hire me</button>
                </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="mt-4 leading-7 text-gray-300 sm:mt-0">
            This is a portfolio created by xSenny_, in case you need different products, contact me:
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10 md:gap-8">
              <span className='text-gray-300 font-[600] text-[15px]'>Follow Me:</span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://github.com/xSenny' className='text-gray-300 font-[500] text-[18px]'><i class="ri-github-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://discord.com/users/664412161358954507' className='text-gray-300 font-[500] text-[18px]'><i class="ri-discord-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://instagram.com/xsenny_' className='text-gray-300 font-[500] text-[18px]'><i class="ri-instagram-line"></i></a>
              </span>
              {/* <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://github.com/xSenny' className='text-gray-300 font-[500] text-[18px]'><i class="ri-facebook-line"></i></a>
              </span> */}
            </div>
          </div>
        </div>
        <div>
            <ul className='flex items-center justify-center gap-10 mt-10'>
              <li><a className='text-gray-400 font-[600]' href="#about">About</a></li>
              <li><a className='text-gray-400 font-[600]' href="#services">Services</a></li>
              <li><a className='text-gray-400 font-[600]' href="#portfolio">Portfolio</a></li>
              <li><a className='text-gray-400 font-[600]' href="#contact">Contact</a></li>
            </ul>
          </div>
      </div>
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>X</span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">xSenny_</h2>
                  <p className="text-gray-400 text-[14px] font-[500]">Personal</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">Copyright {year} by xSenny_ - All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
