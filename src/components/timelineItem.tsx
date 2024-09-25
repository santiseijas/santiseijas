import React from 'react'

interface TimelineItemProps {
  title: string
  description: string[]
  year: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, year }) => {
  return (
    <div className='relative pb-10 pl-5'>
      <div className='absolute left-0 top-2 -ml-2.5 h-5 w-5 rounded-full border-2 border-gray-600 bg-blue-100'></div>
      <h2>{title}</h2>
      <p>{year}</p>
      <ul className='list-disc pl-5'>
        {description.map((item, index) => (
          <li key={index} className=''>
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimelineItem
