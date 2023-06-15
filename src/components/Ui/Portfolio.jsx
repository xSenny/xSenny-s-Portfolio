import React, {useEffect, useState} from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal';

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(3);
  const [portfolio, setPortfolio] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMore = () => {
    setNextItems(prev => prev + 3);
  }

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  }

  useEffect(() => {
    if (selectTab === 'all'){
      setPortfolio(data);
    }
    if (selectTab === 'minecraft'){
      const filteredData = data.filter(item => item.category === 'Minecraft');
      setPortfolio(filteredData);
    }
    if (selectTab === 'web'){
      const filteredData = data.filter(item => item.category === 'Web');
      setPortfolio(filteredData);
    }
  }, [selectTab])

  return (
    <section id="portfolio">
      <div className="container">
        <div className='flex flex-wrap items-center justify-between'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-headingColor text-[2rem] font-[700]'>
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setSelectTab('all')} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">All</button>
            <button onClick={() => setSelectTab('minecraft')} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">Minecraft</button>
            <button onClick={() => setSelectTab('web')} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">Web development</button>
          </div>
          <div className='flex flex-wrap items-center gap-4 mt-12'>
            {
              portfolio?.slice(0, nextItems)?.map((portfolio, index) => (
                <div key={index} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000" className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                  <figure>
                    <img src={portfolio.imgUrl} className="rounded-[8px]" alt="" />
                  </figure>
                  <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                    <div className='flex items-center justify-center w-full h-full'>
                      <button onClick={() => showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See Details</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='mt-6 text-center'>
        {
          nextItems < portfolio.length && data.length > 3 && (
            <button onClick={loadMore} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>Load More</button>
          )
        }
        </div>
      </div>
      {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
      }
    </section>
  )
}

export default Portfolio
