import React from 'react'
import FullScreenWrapper from './fullScreenWrapper'
import TimelineItem from './timelineItem'

const Experience: React.FC = () => {
  return (
    <FullScreenWrapper>
      <div className='max-w-5xl flex-col py-1'>
        <div className='w-full'>
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
        </div>
        <div className='w-full'>
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
        </div>
      </div>
    </FullScreenWrapper>
  )
}

export default Experience
