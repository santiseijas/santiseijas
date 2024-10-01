import Image from 'next/image'
import React from 'react'

interface TitlePageProps {
  title: string
  icon?: { src: string; alt: string }
}

const TitlePage: React.FC<TitlePageProps> = ({ title, icon }) => {
  return (
    <div className='my-8 flex items-center space-x-2'>
      {icon && <Image alt={icon.alt} src={icon.src} width={40} height={40} className='' />}
      <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>{title}</h1>
    </div>
  )
}

export default TitlePage
