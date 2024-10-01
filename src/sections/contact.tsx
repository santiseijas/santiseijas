import React from 'react'
import Footer from '../components/footer'

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='mb-60'>
        <h3>
          Get in touch or shoot me an email directly on{' '}
          <a href='mailto:seijas.santi@gmail.com'>seijas.santi@gmail.com</a>
        </h3>
      </div>
      {/* <div className='items-center'>
        <div className='my-8'>
          <Image
            width={256}
            height={320}
            src='/assets/profile.jpeg'
            alt='me'
            className='mt-4 aspect-square w-64 rotate-2 rounded-2xl bg-black/20 p-1 ring-black/70 lg:w-80 lg:p-2 dark:bg-yellow-500/5 dark:ring-white/20'
          />
        </div>
      </div> */}

      <Footer />
    </div>
  )
}

export default Contact
