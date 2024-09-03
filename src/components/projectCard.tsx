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
    <div className='flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
      <div className='w-full flex-grow md:w-1/2'>
        <Swiper modules={[Navigation, A11y, Autoplay]} spaceBetween={5} slidesPerView={3} autoplay={true}>
          {images.map(i => (
            <SwiperSlide key={i.alt}>
              <div className='h-80'>
                <Image src={i.src} alt={i.alt} fill style={{ objectFit: 'fill', borderRadius: '0.375rem' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full flex-grow md:w-1/2'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <div className='mt-2 flex flex-wrap gap-2'>
          <ul className='mb-2 flex h-auto w-auto flex-row gap-x-2'>
            {technologies.map(tech => (
              <li key={tech}>
                <span className='flex overflow-hidden whitespace-nowrap rounded-full bg-black px-2 py-2 text-xs text-white'>
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <h3 className='relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3 dark:text-gray-300'>
          {description}
        </h3>
      </div>
    </div>
  )
}

export default ProjectCard
