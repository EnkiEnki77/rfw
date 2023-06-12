import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import erika from '../public/assets/Erika.jpg'

type Props = {}

const about = (props: Props) => {
  return (
    <>
        <Layout>
          <h1>About Roanoke Fashion Week </h1>
          <p>Roanoke Fashion Week has been empowering and connecting the Roanoke Valley to its roots in Fashion since 2019. Founded and directed by Erika Jenkins, RFW holds a place for anyone with a passion for fashion, regardless of race, gender, sexuality, size, and ability. By providing an uplifting environment that celebrates individuality, Erika and RFW strive to generate opportunities to designers, HMUA, creatives, and models within the community. </p>
          <p>It is our mission to help others see the beauty and potential in themselves. </p>
          <h2>Meet the Director</h2>
          <h3>Erika Jenkins</h3>
          <img src={erika.src} alt="Erika Jenkins" />
          <p>Erica started modeling when she was Sydney’s Department store when she was 14 years old. She was brought into the industry by her mother, whom is a source of inspiration and guidance in fashion for her. When she turned 18, she began going to castings for designers and shows in New York City. Standing in lines with over 200 models, Erica saw a problem the harsh rejection that countless models, including herself, went through. She was denied from several designers, but her determination to succeed kept her going, until she signed as a model for John Casablanca, in Los Angeles. Since then, she has been resolute in her goal to create a fashion community that uplifts people rather than tear them down, vowing to never treat people the way she had been treated.  In 2019, when Erica founded Roanoke Fashion Week, she sought to build a Fashion Show that shattered the standard of rejection and elitism within the fashion industry.  It has been her personal mission to celebrate the individuality of those pursuing a career in fashion, or simply trying something new. Showing others the light in themselves and building confidence through fashion.</p>
        </Layout>
    </>
  )
}

export default about