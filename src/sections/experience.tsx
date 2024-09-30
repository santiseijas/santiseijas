import React from 'react'
import TimelineItem from '../components/timelineItem'
import TitlePage from '../components/titlePage'

const Experience: React.FC = () => {
  return (
    <div className=''>
      <TitlePage title='Experience' />
      <section className='items-center justify-center'>
        <TimelineItem
          title='React Native Developer, VASS'
          year='Mar 2024 - Now'
          description={[
            'Participation in the development and maintenance of the SABA mobile application, a parking management company.',
            'Developed new features and continuous improvements using React Native and TypeScript.',
            'Managed the full application lifecycle, including deployment to the App Store and Google Play.',
            'Implemented unit and automated tests to ensure code quality and application reliability.',
            'Refactored existing code to optimize product performance and maintainability.'
          ]}
        />
      </section>
      <section className='items-center justify-center md:flex'>
        <TimelineItem
          title='React Native Developer, ECCOCAR'
          year='Sep 2020 — Mar 2024'
          description={[
            'Development of white-label mobile and web applications for mobility solutions and vehicle rental.',
            'Developed and maintained a white-label app using React Native.',
            'Created a white-label web platform using Angular.',
            'Collaborated in an agile environment, ensuring the delivery of high-quality products aligned with customer expectations.'
          ]}
        />
      </section>
    </div>
  )
}

export default Experience
