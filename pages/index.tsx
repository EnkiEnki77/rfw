import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import SignUp from '@/components/SignUp'
import NewsletterSubscribe from '@/components/NewsLetterSubscribe'
import star from '../public/assets/star.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout landing>
        <img className='min-h-full min-w-[1088px] w-full h-auto fixed -ml-[544px] lg:ml-0 top-0 left-1/2 lg:left-0 -z-10' src={star.src} alt="" />
        <NewsletterSubscribe/>
      </Layout>
    </>
  )
}
