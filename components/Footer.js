import React from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import insta from '../public/assets/instagram.png'
import facebook from '../public/assets/facebook.png'
import twitter from '../public/assets/twitter.png'
import email from '../public/assets/email.png'

const Footer = (props) => {
  const navItems = [
    {pageName: 'FAQ', path: '/faq', id: '1'},
    {pageName: 'dot', id: '2'},
    {pageName: 'Privacy Policy', path: '/privacy-policy', id: '3'},
    {pageName: 'dot', id: '4'},
    {pageName: 'Contact Us', path: '/contact', id: '5'},
]

  return (
    <footer className='w-full  bg-black flex flex-col items-center gap-6'>
      <h1 className='uppercase text-5xl text-[#D88BB9] font-italiana pt-12'>rfw</h1>
      <Nav navItems={navItems} foot={true}/>
      <div className='flex gap-5'>
        <Link target='_blank'  href='https://instagram.com/theroanokefashionweek?igshid=NTc4MTIwNjQ2YQ=='>
          <Image src={insta} alt={'insta'}/>
        </Link> 
        <Link target='_blank'  href='https://www.facebook.com/profile.php?id=100091134567315&mibextid=LQQJ4d'>
          <Image src={facebook} alt={'facebook'}/>
        </Link> 

      </div>
      <p className='text-xs text-white font-normal uppercase pb-16'>&copy; 2023 roanoke fashion week</p>
    </footer>
  )
}

export default Footer