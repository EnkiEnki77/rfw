import Link from 'next/link'
import React, {useState} from 'react'
import Nav from './Nav'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

type Props = {}

const Header = (props: Props) => {
    const [toggle, setToggle] = useState(false)

    const navItems = [
        {pageName: 'About', path: '/about', id: '1'},
        {pageName: 'Schedule', path: '/', id: '2'},
        // {pageName: 'Participate', path: '/participate', id: '3'},
        // {pageName: 'Models', path: '/models', id: '4'},
        // {pageName: 'Designers', path: '/designers', id: '5'},
    ]

  return (
    <div onMouseLeave={() => toggle ? setToggle(!toggle) : null}>
      <header className='w-full z-20 h-24 bg-black flex items-center justify-between px-8 lg:px-14 fixed'>
          <Link href='/'><h1 className='uppercase text-5xl text-[#D88BB9] font-italiana'>rfw</h1></Link>
          {toggle ? 
          <AiOutlineClose onClick={() => setToggle(!toggle)} className='lg:hidden w-10 h-10 text-white'/>
            :
          <GiHamburgerMenu onClick={() => setToggle(!toggle)} className='lg:hidden w-10 h-10 text-white'/>}
          <Nav head navItems={navItems}/>
      </header>
      {toggle && 
      <div className='bg-pink-500 pt-32 py-10 z-10 fixed w-full'>
        <Nav hamburger navItems={navItems}/>
      </div>}
    </div>
  )
}

export default Header