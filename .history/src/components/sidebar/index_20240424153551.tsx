'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constant'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()

  return <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
    <div className='flex items-center justify-center flex-col gap-8'>
        <Link
          className='flex font-bold flex-row'
          href="/"
        >
            Fuzzii
        </Link>
        <TooltipProvider>
            {menuOptions.map((menuItem) => (
             <ul key={menuItem.name}>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <li>
                            <Link
                              href={menuItem.href}
                              className={`group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer',
                              {
                                'dark-bg-[#2]'
                              }
                            ></Link>
                        </li>
                    </TooltipTrigger>
                </Tooltip>
             </ul>
            ))}
        </TooltipProvider>
    </div>
  </nav>
  
}

export default MenuOptions