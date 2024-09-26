import React from 'react'

interface FullScreenWrapperProps {
  children: React.ReactNode
}

const FullScreenWrapper: React.FC<FullScreenWrapperProps> = ({ children }) => {
  return <div className='flex max-w-2xl items-center justify-center px-8 py-16'>{children}</div>
}

export default FullScreenWrapper
