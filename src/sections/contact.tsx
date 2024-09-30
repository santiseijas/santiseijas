import Image from 'next/image'
import React from 'react'
import Footer from '../components/footer'

const Contact: React.FC = () => {
  return (
    <div className='flex min-h-screen max-w-5xl flex-col justify-between'>
      <div className='flex flex-grow items-center'>
        <div className='flex w-1/3 flex-col'>
          <Image
            width={800}
            height={800}
            src='/assets/profile.jpeg'
            alt='me'
            className='mt-4 aspect-square w-64 rotate-2 rounded-2xl bg-black/20 p-1 ring-black/70 lg:w-80 lg:p-2 dark:bg-yellow-500/5 dark:ring-white/20'
          />
        </div>

        <div className='pl-10'>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
