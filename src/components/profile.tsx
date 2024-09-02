import Image from 'next/image'
import React from 'react'

interface ProfileProps {
  title: string
  subtitle: string
  link: string
  techStack: { src: string; alt: string }[]
}

const Profile: React.FC<ProfileProps> = ({ title, subtitle, link, techStack }) => {
  return (
    <div>
      <Image className='rounded-full' src='/assets/profile.jpeg' alt='profile' width={200} height={200} />
      <h1 className='tracking-tight text-zinc-800 sm:text-5xl dark:text-white'>{title}</h1>
      <div className='max-w-2xl'>
        <p>{subtitle}</p>
      </div>
      <a href={link} className='text-blue-500 underline'>
        Find out more.
      </a>
      <h1 className='mt-8 text-5xl font-bold'>Tech Stack</h1>

      <div className='mt-8 flex gap-4'>
        {techStack.map(tech => (
          <Image key={tech.alt} src={tech.src} alt={tech.alt} width={50} height={50} />
        ))}
      </div>
    </div>
  )
}

export default Profile
