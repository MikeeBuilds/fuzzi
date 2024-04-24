'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()
  return <div>MenuOptions</div>
  
}

export default MenuOptions