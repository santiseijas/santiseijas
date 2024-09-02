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
    <div className='flex flex-col items-center'>
      <section id='home' className='my-8 rounded-lg p-6'>
        <Profile
          title='Santiago Seijas'
          subtitle="I'm a Frontend Developer with 4 years of experience in React Native and 1 year of experience in React."
          link='https://github.com/santiseijas'
          techStack={techStack}
        />
      </section>
      <section id='experience' className='my-8 rounded-lg p-6'>
        <Experience />
      </section>
      <section id='contact' className='mx-auto min-h-screen'>
        <Contact />
      </section>
    </div>
  )
}

export default HomeScreen
