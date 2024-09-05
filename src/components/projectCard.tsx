import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Project {
  name: string
  description: string
  technologies: string[]
  images: { src: string; alt: string }[]
  link?: string
}

const ProjectCard: React.FC<Project> = ({ name, description, technologies, images, link }) => {
  return (
    <div className='flex flex-col space-y-8 rounded-lg p-6 shadow-md transition hover:shadow-xl md:flex-row md:space-x-8 md:space-y-0'>
      <div className='w-full flex-grow md:w-1/2'>
        <Swiper modules={[Navigation, A11y, Autoplay]} spaceBetween={5} slidesPerView={3} autoplay={true}>
          {images.map(i => (
            <SwiperSlide key={i.alt}>
              <div className='relative h-80 w-full overflow-hidden rounded-lg shadow-md'>
                <Image
                  src={i.src}
                  alt={i.alt}
                  layout='fill'
                  objectFit='cover'
                  className='transition duration-300 ease-in-out hover:scale-105'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='w-full flex-grow md:w-1/2'>
        <h2>{name}</h2>

        <div className='mt-4 flex flex-wrap gap-2'>
          <ul className='mb-2 flex flex-wrap gap-2'>
            {technologies.map(tech => (
              <li key={tech}>
                <span className='flex items-center overflow-hidden whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500'>
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className='relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3 dark:text-gray-300'>
          {description}
        </h3>
        {link && (
          <div className='mt-6'>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-center text-white transition hover:bg-blue-500'
            >
              Explore Project
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
