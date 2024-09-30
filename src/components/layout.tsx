import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main className='flex content-center justify-center'>{children}</main>
    </div>
  )
}

export default Layout
