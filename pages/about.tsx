import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import erika from '../public/assets/Erika.jpg'

type Props = {}

const about = (props: Props) => {
  return (
    <>
        <Layout>
          <div className='flex flex-col items-center mt-12 mb-4 md:my-24 gap-4'>
            <h1 className='text-center px-5 text-2xl md:text-3xl mb-4 font-bold'>About Roanoke Fashion Week </h1>
            <p className='text-center px-5 md:px-72'>Roanoke Fashion Week has been empowering and connecting the Roanoke Valley to its roots in Fashion since 2019. Founded and directed by Erika Jenkins, RFW holds a place for anyone with a passion for fashion, regardless of race, gender, sexuality, size, and ability. By providing an uplifting environment that celebrates individuality, Erika and RFW strive to generate opportunities to designers, HMUA, creatives, and models within the community. </p>
            <p className='px-5 text-center'><b><em>It is our mission to help others see the beauty and potential in themselves.</em></b> </p>
          </div>
          <div className='flex flex-col items-center mb-16 mt-16 md:mb-24 px-5 md:px-80 gap-5'>
            <img className='w-4/5 h-1/4 lg:w-1/4 md:h-1/3 ' src={erika.src} alt="Erika Jenkins" />
            <div className='mb-4'>
              <h2 className='text-center text-2xl font-bold'>Meet the Director:</h2>
              <h3 className='text-xl font-semibold text-center'>Erika Jenkins</h3>
            </div>
            <p className='text-center '>
              Erica started modeling when she was in Sydney’s Department store when she was 14 years old. She was brought i
              nto the industry by her mother, whom is a source of inspiration and guidance in fashion for her. When she turned 18, she began going to castings for designers and shows 
              in New York City. Standing in lines with over 200 models, 
            </p>
            <p className='text-center '>
              Erica saw a problem with the harsh rejection that countless models, including herself, went through. She was denied from 
              several designers, but her determination to succeed kept her going, until she signed as a model for John Casablanca, 
              in Los Angeles.
              Since then, she has been resolute in her goal to create a fashion community that uplifts people rather than tear 
              them down, vowing to never treat people the way she had been treated.
            </p>  
              
              <p className='text-center '>
                In 2019, when Erica founded Roanoke Fashion Week, she sought to build a Fashion Show that shattered the standard of 
                rejection and elitism within the fashion industry.  It has been her personal mission to celebrate the individuality 
                of those pursuing a career in fashion, or simply trying something new. Showing others the light in themselves and 
                building confidence through fashion.
              </p>
          </div>
        </Layout>
    </>
  )
}

export default about