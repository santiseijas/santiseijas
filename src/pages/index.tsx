import React from 'react'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Profile from '../components/profile'
import Projects from '../components/projects'

const HomeScreen: React.FC = () => {
  const techStack = [
    { src: '/assets/react-native.svg', alt: 'react-native' },
    { src: '/assets/react.svg', alt: 'react' },
    { src: '/assets/ts.svg', alt: 'typescript' },
    { src: '/assets/js.svg', alt: 'javascript' },
    { src: '/assets/css.svg', alt: 'css' },
    { src: '/assets/html.svg', alt: 'html' }
  ]

  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide'>
      <section id='home' className='flex h-screen snap-start flex-col items-center justify-center p-4'>
        <Profile
          title='hello, I´m santiseijas'
          subtitle="I'm a Frontend Developer with 4 years of experience in React Native and 1 year of experience in React. Born and living in Spain 🇪🇸"
          link='https://github.com/santiseijas'
          techStack={techStack}
        />
      </section>
      <section id='experience' className='flex h-screen snap-start flex-col items-center justify-center p-4'>
        <Experience />
      </section>
      <section id='projects' className='flex h-screen snap-start flex-col items-center justify-center p-4'>
        <Projects />
      </section>
      <section id='contact' className='flex h-screen snap-start flex-col items-center justify-center p-4'>
        <Contact />
      </section>
    </div>
  )
}

export default HomeScreen
