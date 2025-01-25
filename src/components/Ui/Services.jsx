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
          <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>At the moment, I offerr different web development services using different discord servers who offer web development services. Here are some of the services I work with: <a className='text-blue-400' target='_blank' href="https://invite.rollerite.com/664412161358954507">Rollerite</a>
            , <a href="https://invite.arcanestudios.co/664412161358954507" className='text-blue-400' target='_blank'>Arcane Studios</a>, <a href="https://discord.gg/YvcpJgEbXs" className='text-blue-400' target='_blank'>Devroom (my Affiliate code: u7SmmdY2QT)</a>
          </p>
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
                          <h3 className='text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Web Design</h3>
                          <p className='text-[15px] text-smallTextColor font-[500] group-hover:text-white group-hover:font-[500] leading-7'>Possessing different Figma skills, I can brainstorm and design your perfect website design for all of your needs, that can be later easily translated and developmed into a real application.</p>
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
                          <h3 className='text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Front end Development</h3>
                          <p className='text-[15px] font-[500] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>With almost 4 years since I coded my first HTML + CSS website, I can develop your perfect landing page or portfolio from a Figma Design or directly from Scratch.</p>
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
          <div className='w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-sm antialiased font-semibold text-gray-700'>
              <div className="absolute hidden w-1 h-full sm:block bg:indigo-300 left-1/2 transform-translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col items-center sm:flex-row">
                    <div className="flex items-center justify-start w-full mx-auto">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                          <h3 className='text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Backend Developer</h3>
                          <p className='text-[15px] font-[500] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Almost 3 years ago I discovered what happens behind the beautifully designed web pages and what makes the web world stay connected.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate:y-0">
                      <figure>
                        <img src={uiImg} alt="" />
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
                          <h3 className='text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-2xl'>Full Stack Web Developer</h3>
                          <p className='text-[15px] font-[500] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>With all of the services from above together, I can build you every idea you dreamt of. I am experienced with building complex systems, web stores, CMS platforms for blogging, and of course - dashboards for everything.</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate:y-0">
                      <figure>
                        <img src={appsImg} alt="" />
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
