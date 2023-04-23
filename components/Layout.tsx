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
        <main className='w-full h-[745px] bg-star bg-no-repeat bg-cover bg-[0_-120px] max-h-[1080px]'>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout