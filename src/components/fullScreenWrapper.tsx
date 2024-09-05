import React from 'react'

interface FullScreenWrapperProps {
  children: React.ReactNode
}

const FullScreenWrapper: React.FC<FullScreenWrapperProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div className='w-full max-w-5xl space-y-5'>{children}</div>
    </div>
  )
}

export default FullScreenWrapper
