import React from 'react'
import Experience from '../sections/experience'
import Profile from '../sections/profile'
import Projects from '../sections/projects'

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
    <div className='h-screen'>
      <section id='home' className=''>
        <Profile
          title='hello, I´m santiseijas'
          subtitle="I'm a Frontend Developer with 4 years of experience in React Native and 1 year of experience in React. Born and living in Spain 🇪🇸"
          link='https://github.com/santiseijas'
          techStack={techStack}
        />
      </section>

      <section id='experience' className='flex items-center justify-center'>
        <Experience />
      </section>
      <section id='projects' className=''>
        <Projects />
      </section>
      {/* <section id='contact' className='flex h-screen snap-start flex-col items-center justify-center p-4'>
        <Contact />
      </section> */}
    </div>
  )
}

export default HomeScreen
