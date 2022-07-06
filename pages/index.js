import {server} from '../config'
import HomePage from '../components/Homepage/HomePage'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Image, HStack, VStack } from '@chakra-ui/react'


const home = ({ articles }) => {
  console.log(articles)
  return (
    < >   <Head>
    <meta
    name="viewport"
    content="width=device-width,initial-scale=1"
    />
    <meta name="google-site-verification" content="fKHbDkHTan3C7mVkSWvmieWRC6dlk3VaCe28E2m0RkI" />
    <meta
    name="keywords"
    content={'Osasart, Studios, 3D, Animation, Advertising, Visualisation, Architecture, Arch, Osasart Studios, Digital, Communication, Digital, Art '}
    />
    <meta
    name="description"
    content={`Osasart creates high-quality animation for advertising, communication, and visualization. With end-to-end production capabilities, we develop custom digital content adapted to our clients' business aims and requirements. 3D Digital Content Services at its peak Osasart Studios provides  one of the best 3D quality services at very affordable prices`}
    />
      <meta
    charSet='utf-8'
    />
    <link rel="icon" href='./favicon.ico' />
    <title>{'Osasart Studios'}</title>
    
   </Head>

      {
        <Box backgroundColor={'#EDF0F2'} position="absolute" left="0" top="0" right="0">
          <HomePage />

        </Box>
      
      }



    </>
  )
}

export default home




