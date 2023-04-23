import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    navItems: {pageName: string, path: string}[]
}

const Nav = ({navItems}: Props) => {
  return (
    <nav>
        <ul className='flex gap-7'>
            {navItems.map(item => {return (
                <Link  href={item.path}>
                    <li className='text-white uppercase text-sm font-bold hover:text-[#D88BB9]'>{item.pageName}</li>
                </Link>
            )})}      
        </ul>
    </nav>
  )
}

export default Nav