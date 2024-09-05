import Image from 'next/image'
import React from 'react'
import FullScreenWrapper from './fullScreenWrapper'

interface ProfileProps {
  title: string
  subtitle: string
  link: string
  techStack: { src: string; alt: string }[]
}

const Profile: React.FC<ProfileProps> = ({ title, subtitle, link, techStack }) => {
  return (
    <FullScreenWrapper>
      <div className='space-y-5'>
        <div className='space-y-2'>
          <Image className='rounded-full' src='/assets/profile.jpeg' alt='profile' width={100} height={100} />

          <h1 className='tracking-tight text-zinc-800 sm:text-5xl dark:text-white'>{title}</h1>
          <div className='max-w-2xl'>
            <h3 className='mt-2'>{subtitle}</h3>
          </div>
          <a href={link} className='text-blue-500 underline'>
            Find out more.
          </a>
        </div>
        <div className='space-y-2'>
          <h2 className='mt-8'>Tech Stack</h2>
          <div className='flex gap-4'>
            {techStack.map(tech => (
              <Image key={tech.alt} src={tech.src} alt={tech.alt} width={70} height={70} />
            ))}
          </div>
        </div>
      </div>
    </FullScreenWrapper>
  )
}

export default Profile
