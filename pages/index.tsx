import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import star from '../public/assets/star.png'
import SignUp from '@/components/SignUp'
import NewsletterSubscribe from '@/components/NewsLetterSubscribe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout landing>
        <NewsletterSubscribe/>
      </Layout>
    </>
  )
}
