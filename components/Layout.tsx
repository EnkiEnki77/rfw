import React, { Fragment, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
        <Header/>
        <main className='w-full h-[745px] max-h-[1080px] relative'>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout