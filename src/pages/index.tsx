import React from 'react'
import TitlePage from '../components/titlePage'
import Contact from '../sections/contact'
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
    <main>
      <section className='relative inset-0 flex content-center border-b px-4'>
        <div className='max-w-xl'>
          <section id='profile' className='mt-24 scroll-mt-20'>
            <Profile
              title="hello, I'm santiseijas"
              subtitle="I'm a Frontend Developer with 4 years of experience in React Native and 1 year of experience in React. Born and living in Spain 🇪🇸"
              link='https://github.com/santiseijas'
              techStack={techStack}
            />
          </section>
          <section id='experience' className='mt-24 scroll-mt-20'>
            <Experience />
          </section>

          <section id='projects' className='mt-24 scroll-mt-20'>
            <TitlePage title='Projects' icon={{ src: '/assets/projects.svg', alt: 'projects' }} />

            <Projects />
          </section>
          <section id='contact' className='mt-24 scroll-mt-20'>
            <TitlePage title='Contact' />

            <Contact />
          </section>
        </div>
      </section>
    </main>
  )
}

export default HomeScreen
