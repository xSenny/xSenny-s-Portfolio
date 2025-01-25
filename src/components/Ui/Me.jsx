import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import image from '../../assets/images/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg'
import CountUp from 'react-countup'
const Me = () => {
  return (
    <div>
      <section className='pt-0' id='about'>
        <div className='container pt-14'>
          <div className='items-center justify-between md:flex sm:flex-col md:flex-row'>
            <div className='w-full md:basis-1/2'>
              <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>console.log("Hello, People!");</h5>
              <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Ursu Arsenie<br />Web Developer</h1>
              <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay="200" className='flex items-center gap-6 mt-7'>
                <a href="#contact">
                  <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-fill"></i> Hire me</button>
                </a>
                <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See portfolio</a>
              </div>
              
              <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 mt-14 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
              <span><i class="ri-apps-line"></i></span><p>I am a student Web Developer. Most of my work is done for different clients with different requests, but also some personal, side projects. I'm happy that you came accross my personal website and I'm welcoming you to check my work!</p></p>
              <div className="flex items-center gap-9 mt-14">
                <span className='text-smallTextColor text-[15px] font-[600]'>Follow me:</span>
                <span>
                  <a href="https://github.com/xSenny" className='text-smallTextColor text-[18px] font-[600]'><i class="ri-github-line"></i></a>
                </span>
                <span>
                  <a href="https://instagram.com/xsenny_" className='text-smallTextColor text-[18px] font-[600]'><i class="ri-instagram-line"></i></a>
                </span>
                <span>
                <a href='https://discord.com/users/664412161358954507' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-discord-line"></i></a>
                </span>
              </div>
            </div>
            <div className="mt-10 basis-1/3 sm:mt-0">
              <figure className='flex items-center justify-center'>
                <img src={image} alt="" />
              </figure>
            </div>
            <div className="flex flex-wrap justify-between gap-3 mt-10 text-center md:basis-1/5 md:mt-0 md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={4} duration={2} /> 
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px] '>Years of Experience</h4>
              </div>
              <div className="mb-10">
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={100} duration={2} suffix='%' /> 
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px] '>Success Rate</h4>
              </div>
              <div className="mb-10">
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={30} duration={2} suffix='+'/> 
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px] '>Happy Clients</h4>
              </div>
              <div className="mb-10">
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={40} duration={2} suffix='+' /> 
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px] '>Projects Completed</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Me
