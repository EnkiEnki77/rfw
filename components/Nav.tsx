import Link from 'next/link'
import React, { ReactNode } from 'react'

import Image from 'next/image'

type Props = {
    navItems: {pageName?: string, path?: string, id: string}[];
    foot?: boolean;
    head?: boolean,
    hamburger?: boolean
}

const Nav = ({navItems, foot, head, hamburger}: Props) => {
  return (
    <nav className={` ${ head && 'hidden lg:block'}`}>
        <ul className={`flex ${hamburger && 'flex-col'} ${foot ? 'gap-4' : 'gap-7'} items-center`}>
            {navItems.map(item => {return (
                item.path == '/contact' ? 
                <li className='text-white uppercase text-sm font-bold cursor-pointer hover:text-[#D88BB9]' onClick={() => window.location = 'mailto:erica@theroanokefashionweek.com'}>{item.pageName}</li> :
                item.path != null && item.pageName != 'Contact Us' ?
                <Link  href={item.path} key={item.id}>
                    <li className='text-white uppercase text-sm font-bold cursor-pointer hover:text-[#D88BB9]'>{item.pageName}</li>
                </Link> :
                <li key={item.id} className='text-white text-2xl font-bold pb-1'>&#x2022;</li>
            )})}      
            
        </ul>
    </nav>
  )
}

export default Nav