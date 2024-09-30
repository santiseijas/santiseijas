import Image from 'next/image'
import React from 'react'

interface Project {
  name: string
  description: string
  technologies: string[]
  images: { src: string; alt: string }[]
}

const ProjectCard: React.FC<Project> = ({ name, description, technologies, images }) => {
  return (
    <div className='space-y-4 rounded-lg pb-10'>
      <h2 className=''>{name}</h2>

      {/* Contenedor de imágenes */}
      <div className='grid grid-cols-2 overflow-x-auto sm:grid-cols-3 md:flex md:gap-px md:overflow-x-auto'>
        {images.map(i => (
          <div key={i.src} className='relative mb-2 h-48 w-28 overflow-hidden rounded-lg shadow-md'>
            <Image src={i.src} alt={i.alt} layout='fill' />
          </div>
        ))}
      </div>

      <div className='flex flex-col space-y-4'>
        <div className='flex flex-wrap gap-2'>
          <ul className='flex flex-wrap gap-2'>
            {technologies.map(tech => (
              <li key={tech}>
                <span className='flex items-center overflow-hidden whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500'>
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className='text-gray-600 dark:text-gray-300'>{description}</h3>
      </div>
    </div>
  )
}

export default ProjectCard
