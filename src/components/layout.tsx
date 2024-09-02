import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main className='mx-auto flex max-w-7xl justify-center bg-zinc-50'>{children}</main>
    </div>
  )
}

export default Layout
