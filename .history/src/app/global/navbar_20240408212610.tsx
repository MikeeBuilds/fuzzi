import Image from 'next/image'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b0[1px] border-neutral-900 justify-between'>
        <aside className='flex items-center gap-[2px]'>
            <p className='text-3xl font-bold'>Fu</p>
            <Image
              src="/fuzzieLogo.png"
              width={15}
              height={15}
              alt='fuzzi logo'
              className='shadow-sm'
            />
            <p className='text-3xl font-bold'>zii</p>
        </aside>
        <nav className='absolute left-[50%] top-'></nav>
    </header>
  )
}

export default Navbar