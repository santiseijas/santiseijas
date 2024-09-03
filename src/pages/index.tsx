import React from 'react'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Profile from '../components/profile'

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
    <div className='scrollbar-hide h-screen snap-y snap-mandatory overflow-y-scroll'>
      <section id='profile' className='flex h-screen snap-start flex-col justify-center'>
        <Profile
          title='hello, I´m santiseijas'
          subtitle="I'm a Frontend Developer with 4 years of experience in React Native and 1 year of experience in React. Born and living in Spain 🇪🇸"
          link='https://github.com/santiseijas'
          techStack={techStack}
        />
      </section>
      <section id='experience' className='flex h-screen snap-start flex-col justify-center'>
        <Experience />
      </section>
      <section id='contact' className='flex h-screen snap-start flex-col justify-center'>
        <Contact />
      </section>
    </div>
  )
}

export default HomeScreen
