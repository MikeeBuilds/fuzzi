import React from'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div className='border-l-[1px] border-t-[]'>
            <div className='w-full'>
                {props.children}  
            </div> 
        </div>
    )
}