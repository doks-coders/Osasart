import React from 'react'
import { Box, Flex, Image, Heading, Button, Container, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import Link from 'next/link'
const Header = () => {
  return (
    <Box height={'700px'} >
  
        <Box as="div" position="relative" h="100%"  w="100%">
          <Box w="100%" h="100%">
            <Image objectFit="cover" w="100%" h="100%" src={'Paw/building.png'} ></Image>
          </Box>
          <Box position={'absolute'} background="blackAlpha.800" top="0" w="100%"  h="100%"></Box>
          <Flex position={'absolute'} flexDirection="column" top="0" w="100%"  h="100%">
            {/*Header Part*/}
            <Flex justifyContent={'space-between'} w="100%" height="20%" >
              <Flex w="60%" justifyContent={'center'} alignItems="center" >
                <Flex w="90%" alignContent={'center'} >
                  <Image borderRadius={'full'} boxSize="40px" mr="10px" objectFit="cover"  src="Paw/icon.png"></Image>
                  <Flex  flexDirection="column" justifyContent="center">
                  <Heading fontSize={{md:"3xl",sm:'md',base:'md'}} fontWeight="sm" color="#FFFFFF">
                    OSASART INC
                  </Heading>
                  <Box height={{md:'3px',sm:'1px',base:'1px'}} background="white" w="30%"></Box>
                  </Flex>
                 
                </Flex>
              </Flex>
              <Flex display={{sm:'none',md:'flex',base:'none'}} minW="30%" mr="10px" alignItems="center">
                <HeaderLinks />
              </Flex>
            </Flex>
{/*Banner Part*/}
            <Flex w="100%" flexDirection={{md:'row',sm:'column',base:'column'}} height="80%"  >
              <Flex  height="100%" w={{sm:'100%',md:'50%',base:'100%'}} justifyContent={'center'} alignItems="center">
<Image height={'60%'} width="60%" objectFit="cover"  src={'Paw/building.png'} ></Image>
              </Flex>
              <Flex height="100%" w={{sm:'100%',md:'50%',base:'100%'}}  justifyContent={'center'} alignItems={{md:'center',sm:'',base:''}} >
                <Flex  w="80%" h="40%" flexDirection="column" justifyContent={'space-between'} >
                  <Heading color="#FFFFFF" textAlign={{md:'left',sm:'center',base:'center'}} fontSize={{md:"5xl",sm:'3xl',base:'3xl'}}>Get Your 3D designs at a very high quality</Heading>
                  <Flex justifyContent={{md:'flex-start',sm:'center',base:'center'}} >
                    <Button _hover={{color:'black',background:"white"}} mt="40px" variant="outline" color="white" rounded="full">Lets Get Started</Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
    
    </Box>
  )
}

export default Header


const HeaderLinks = () => {

  let linkArray = [{ name: 'About us' }, { name: 'Blog' }, { name: 'Services' }, { name: 'Sign up' }]
  return (
    <>
      <Flex color="#FFFFFF" w="100%" >
        {
          linkArray.map((val,index) => (
            <Text key={index} p="10px" as="div">
              <Link>
                {val.name}
              </Link>
            </Text>
          ))
        }
      </Flex>
    </>
  )
}