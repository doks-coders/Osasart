import {server} from '../config'
import HomePage from '../components/Homepage/HomePage'
import Link from 'next/link'
import { Box, Image, HStack, VStack } from '@chakra-ui/react'


const home = ({ articles }) => {
  console.log(articles)
  return (
    < >


      {
        <Box backgroundColor={'#EDF0F2'} position="absolute" left="0" top="0" right="0">
          <HomePage />

        </Box>
      
      }



    </>
  )
}

export default home




