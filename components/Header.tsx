import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

type Props = {}

const Header = (props: Props) => {
    const navItems = [
        {pageName: 'About', path: '/about', id: '1'},
        {pageName: 'Schedule', path: '/', id: '2'},
        // {pageName: 'Participate', path: '/participate', id: '3'},
        // {pageName: 'Models', path: '/models', id: '4'},
        // {pageName: 'Designers', path: '/designers', id: '5'},
    ]
  return (
    <header className='w-full z-20 h-24 bg-black flex items-center justify-between px-8 lg:px-14 fixed'>
        <Link href='/'><h1 className='uppercase text-5xl text-[#D88BB9] font-italiana'>rfw</h1></Link>
        <Nav navItems={navItems}/>
    </header>
  )
}

export default Header