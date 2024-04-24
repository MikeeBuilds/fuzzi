import React from'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div className='border-1'>
            <div className='w-full'>
                {props.children}  
            </div> 
        </div>
    )
}