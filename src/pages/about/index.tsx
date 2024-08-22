import Education from '@/src/components/education'
import Experience from '@/src/components/experience'
import React from 'react'

function About() {
  return (
    <div>
    <Education />
    <Experience />
    <div className="bg-custom-blue p-4 text-white">
  This div has a custom blue background color!
</div>
    </div>
  )
}

export default About
