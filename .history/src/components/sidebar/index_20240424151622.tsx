'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()

  return <nav className='dark:bg-black'>MenuOptions</nav>
  
}

export default MenuOptions