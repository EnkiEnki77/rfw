import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

type Props = {}

const Header = (props: Props) => {
    const navItems = [
        {pageName: 'About', path: '/about', id: '1'},
        {pageName: 'Schedule', path: '/schedule', id: '2'},
        {pageName: 'Participate', path: '/participate', id: '3'},
        {pageName: 'Models', path: '/models', id: '4'},
        {pageName: 'Designers', path: '/designers', id: '5'},
    ]
  return (
    <header className='w-full h-24 bg-black flex items-center justify-between px-14'>
        <h1 className='uppercase text-5xl text-[#D88BB9] font-italiana'>rfw</h1>
        <Nav navItems={navItems}/>
    </header>
  )
}

export default Header