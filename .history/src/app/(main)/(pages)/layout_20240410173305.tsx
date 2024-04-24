import React from'react'

type Props = { children: React.ReactNode }

const Layout = ({}) => {
    return (
        <div className='flex overflow-hidden h-screen'>
            <div className='w-full'>
                {props.children}  
            </div> 
        </div>
    )
}