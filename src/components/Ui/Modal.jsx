import React from 'react'

import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeID, setShowModal}) => {
  const portofolio = portfolios.find(portofolio => portofolio.id === activeID)
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full bg-headingColor bg-opacity-40'>
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            {portofolio.video ? <video src={portofolio.videoUrl} controls type="video/mp4"></video> : <img src={portofolio.imgUrl} alt='nu-i'></img>}
          </figure>
        </div>
        <div>
          <h2 className='text-2xl text-headingColor font-[700] my-5'>
            {portofolio.title}
          </h2>
          <p className='text-[15px] leading-7 text-smallTextColor'>{portofolio.description}</p>
          <div className='flex flex-wrap gap-3 mt-5 item-center'>
            <h4 className="text-headingColor text-[18px] text-[700]">
              Tehnologies:
            </h4>
            {
              portofolio.technologies.map((item, index) => (
                <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>
              ))
            }
          </div>
          {portofolio.siteUrl !== "#" && <div className='flex items-center justify-center mt-5'>
          <a href={portofolio.siteUrl} className="my-[8px] text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">Check</a></div>}
          <button onClick={() => setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[8px]'>&times;</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
