import React from'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div className='border-l-[1px] border-neutral-900'>
            <div className='w-full'>
                {props.children}  
            </div> 
        </div>
    )
}