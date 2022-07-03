
import React from 'react'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from './Header'
import Categories from './Categories';
import Footer from './Footer'
import Bonus from './Bonus';
import Statements from './Statements'
import Services from './Services'

import { Box, Image } from '@chakra-ui/react'


const HomePage = () => {
  const servicesRef = React.useRef(null)
  const categoriesRef = React.useRef(null)
  const scrollToCategories = () => categoriesRef.current.scrollIntoView({ behavior: 'smooth' })
  const scrollToServices = () => servicesRef.current.scrollIntoView({ behavior: 'smooth' })
  return (
    <>
    <Box backgroundColor={'#EDF0F2'} position="absolute" left="0" top="0" right="0">
    <Header onScroll={scrollToCategories} />
    <Categories onScroll={scrollToServices} inputRef={categoriesRef} />
    <Bonus />
    <Services inputRef={servicesRef} />
    <Statements />
    <Footer />
  </Box>

    </>
  )
}

export default HomePage


