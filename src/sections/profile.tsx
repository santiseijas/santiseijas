import Image from 'next/image'
import React from 'react'
import TypingEffect from '../components/typingEffect'

interface ProfileProps {
  title: string
  subtitle: string
  link: string
  techStack: { src: string; alt: string }[]
}

const techStack = [
  { src: '/assets/react-native.svg', alt: 'react-native' },
  { src: '/assets/react.svg', alt: 'react' },
  { src: '/assets/ts.svg', alt: 'typescript' },
  { src: '/assets/js.svg', alt: 'javascript' },
  { src: '/assets/css.svg', alt: 'css' },
  { src: '/assets/html.svg', alt: 'html' }
]

const Profile: React.FC<ProfileProps> = ({ title, subtitle, link }) => {
  return (
    <section id='profile' className='items-center justify-center'>
      <div className='relative my-8 h-[120px] w-[150px]'>
        <Image
          src='/assets/profile.jpeg'
          alt='profile'
          width={150}
          height={150}
          style={{ borderRadius: '70% 95% 55% 80%' }}
        />
      </div>
      <TypingEffect words={['santiseijas']} typingSpeed={100} deletingSpeed={50} pauseTime={1000} />{' '}
      <h3 className=''>{subtitle}</h3>
      <a href={link} className='underline sm:text-blue-500'>
        Find out more.
      </a>
      <div className='my-8'>
        <h2 className=''>Tech Stack</h2>
        <div className='flex flex-row gap-1'>
          {techStack.map(tech => (
            <Image key={tech.alt} src={tech.src} alt={tech.alt} width={70} height={70} className='h-10 w-10' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profile
