import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main className='flex justify-center'>{children}</main>
    </div>
  )
}

export default Layout
