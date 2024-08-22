import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <h1 className='font-incognito font-semibold tracking-tight text-5xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full'>
          Santi Seijas
        </h1>
        <h1 className='text-xl font-bold underline'>Hello world!</h1>
        <nav className='flex space-x-4'>
          <Link href='/about' passHref>
            <h1 className='text-white hover:text-gray-400'>about</h1>
          </Link>
          <Link href='/experience' passHref>
            <h1 className='text-white hover:text-gray-400'>Formación</h1>
          </Link>
          <Link href='/contact' passHref>
            <h1 className='text-white hover:text-gray-400'>Contacto</h1>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
