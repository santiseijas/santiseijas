import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  const communications = [
    { src: '/assets/linkedin.svg', alt: 'linkedin', link: 'https://www.linkedin.com/in/santiseijas' },
    { src: '/assets/github.svg', alt: 'github', link: 'https://github.com/santiseijas' },
    { src: '/assets/gmail.svg', alt: 'gmail', link: 'mailto:seijas.santi@gmail.com' }
  ]

  return (
    <footer className='py-4 text-white'>
      <div className='flex items-center justify-center gap-2 space-x-5'>
        <p className='text-lg'>
          Made with
          <span className='text-red-500'> ♥ </span>
          by{' '}
          <a href='https://github.com/santiseijas' className='font-bold text-blue-400 hover:underline'>
            santiseijas
          </a>
        </p>
        <div className='flex gap-2'>
          {communications.map(comm => (
            <a key={comm.alt} href={comm.link} target='_blank' rel='noopener noreferrer'>
              <Image src={comm.src} alt={comm.alt} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
