import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='mt-8 bg-gray-800 py-4 text-center text-white'>
      <p>&copy; {new Date().getFullYear()} Santiago Seijas Marante</p>
    </footer>
  )
}

export default Footer
