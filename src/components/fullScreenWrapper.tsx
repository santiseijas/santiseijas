import React from 'react'

interface FullScreenWrapperProps {
  children: React.ReactNode
}

const FullScreenWrapper: React.FC<FullScreenWrapperProps> = ({ children }) => {
  return <div className='flex h-screen w-full items-center justify-center px-8'>{children}</div>
}

export default FullScreenWrapper
