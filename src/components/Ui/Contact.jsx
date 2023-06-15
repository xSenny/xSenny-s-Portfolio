import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='pb-16'>
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
        <div className="items-center justify-between md:flex">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
          <iframe title='google-maps' className='w-full h-full border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87073.8340234137!2d28.787965127754394!3d46.9998475927547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sro!2s!4v1680629840732!5m2!1sro!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form method='POST' action="https://formsubmit.co/ursuarsenie@gmail.com" className='w-full'>
              <div className="mb-5">
                <input type="text" name='name' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <div className="mb-5">
                <input type="email" name='email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <div className="mb-5">
                <input type="text" name='subject' placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <div className="mb-5">
                <textarea name="mesaj" rows={3} placeholder='Write your message' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <input type="hidden" name="_subject" value="Nou mesaj prin portofoliu!"></input>
              <input type="hidden" name="_autoresponse" value="thanks you for your message, xSenny_ will try to respond to it as soon as he can."></input>
              <button type='submit' className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
