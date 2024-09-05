import React from 'react'
import FullScreenWrapper from './fullScreenWrapper'
import TimelineItem from './timelineItem'

const Timeline: React.FC = () => {
  return (
    <FullScreenWrapper>
      <div className='relative mx-auto flex min-h-screen max-w-5xl flex-col justify-start border-l border-gray-700 py-10'>
        <TimelineItem
          title='Still learning'
          year='Now'
          active={true}
          description={[
            "After some relaxed time, I'm back to learning and working.",
            'Joined a start-up specializing in education technologies.'
          ]}
        />
        <TimelineItem
          title='Learning and growing'
          year='2022'
          description={[
            'Working to enhance and refine my JavaScript skills and abilities.',
            'Acquiring knowledge and understanding of web accessibility principles.',
            'Investigating design systems and testing methodologies.',
            'Participating in open-source projects.'
          ]}
        />
        <TimelineItem
          title='Landed first job as a developer'
          year='2021'
          description={[
            'Joined a start-up specializing in e-commerce fulfillment, robotics, and logistics services.',
            "Engaged in the development, maintenance, and optimization of the company's website.",
            'Acquired knowledge in technologies such as JavaScript, React.js, TypeScript, Zustand, and Hubspot.'
          ]}
        />
        <TimelineItem
          title='Started to learn programming'
          year='2020'
          description={[
            'Started with Python and transitioned into web development.',
            'Completed numerous courses and several small-scale projects.',
            'Utilized freecodecamp and The Odin Project as primary educational resources.',
            'Successfully graduated from a bootcamp program.'
          ]}
        />
        <TimelineItem title='Born' year='1989' description={[]} />
      </div>
    </FullScreenWrapper>
  )
}

export default Timeline
