import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='fixed top-4 z-10 w-auto rounded-full border-gray-200 bg-slate-100 px-5 py-2 shadow-lg'>
      <nav className='flex space-x-5'>
        <Link href='#profile' passHref>
          <h3 className='text-gray-700 hover:text-gray-400'>Home</h3>
        </Link>
        <Link href='#experience' passHref>
          <h3 className='text-gray-700 hover:text-gray-400'>Experience</h3>
        </Link>
        <Link href='#contact' passHref>
          <h3 className='text-gray-700 hover:text-gray-400'>Contacto</h3>
        </Link>
      </nav>
    </header>
  )
}

export default Header
