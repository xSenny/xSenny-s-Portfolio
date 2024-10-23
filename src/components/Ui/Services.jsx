import React from 'react'
import fromendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
  return (
    <section id='services'>
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className='text-headingColor font-[800] text-[2.4rem]'>How can I help</h2>
          <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>I can help my clients by creating various projects such as website development, android apps, minecraft mods, minecraft plugins, minecraft servers, discord bots, and much more, all you have to do is contact me using the form below, or using discord, also below.</p>
        </div>
        <div className='flex flex-col justify-center sm:py-12'>
          <div className='w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-sm antialiased font-semibold text-gray-700'>
              <div className="absolute hidden w-1 h-full sm:block bg:indigo-300 left-1/2 transform-translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col items-center sm:flex-row">
                    <div className="flex items-center justify-start w-full mx-auto">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                          <h3 className='text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Frontend Developer</h3>
                          <p className='text-[15px] text-smallTextColor font-[500] group-hover:text-white group-hover:font-[500] leading-7'>With my Front End skills, I can help you create great projects. I have 2 years of experience in this field, and I still want to develop this skill further.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate:y-0">
                      <figure>
                        <img src={fromendImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className='w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-sm antialiased font-semibold text-gray-700'>
              <div className="absolute hidden w-1 h-full sm:block bg:indigo-300 left-1/2 transform-translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col items-center sm:flex-row">
                    <div className="flex items-center justify-end w-full mx-auto">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div data-aos="fade-left" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                          <h3 className='text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>FullStack Web Developer</h3>
                          <p className='text-[15px] font-[500] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I have 3 years experience in creating and developing different Web Applications, using JS frameworks such as NextJS/ReactJS</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate:y-0">
                      <figure>
                        <img src={backendImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
