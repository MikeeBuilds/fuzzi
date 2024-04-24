import React from'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div className=''>
            <div className='w-full'>
                {props.children}  
            </div> 
        </div>
    )
}