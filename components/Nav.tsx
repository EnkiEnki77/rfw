import Link from 'next/link'
import React, { ReactNode } from 'react'

import Image from 'next/image'

type Props = {
    navItems: {pageName?: string, path?: string}[];
    foot?: boolean;
}

const Nav = ({navItems, foot}: Props) => {
  return (
    <nav>
        <ul className={`flex ${foot ? 'gap-4' : 'gap-7'} items-center`}>
            {navItems.map(item => {return (
                item.path != null ?
                <Link  href={item.path}>
                    <li className='text-white uppercase text-sm font-bold hover:text-[#D88BB9]'>{item.pageName}</li>
                </Link> :
                <li className='text-white text-2xl font-bold'>&#x2022;</li>
            )})}      
            
        </ul>
    </nav>
  )
}

export default Nav