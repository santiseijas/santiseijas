import React from 'react'

interface TitlePageProps {
  title: string
}

const TitlePage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>{title}</h1>
    </div>
  )
}

export default TitlePage
