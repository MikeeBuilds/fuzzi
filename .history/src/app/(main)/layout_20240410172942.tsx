import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <div></div>
    </div>
  )
}

export default Layout