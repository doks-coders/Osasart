import React from 'react'
import { Box, Flex, Image, Heading, Button, Container, Divider, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import Link from 'next/link'
const Services = () => {
    return (
        <Box mt={{md:"100px",sm:'200px',base:'200px'}}>
            <Container h="100%" maxW="container.xl">
                <Flex flexDir={'column'} w="100%" h="100%">
                    <Flex justifyContent="center" h="30%" >
                        <Flex w="50%" h="100%" justifyContent={'space-evenly'} alignItems="center" flexDir="column">
                            <Heading textAlign="center" fontSize={{md:"4xl",sm:'2xl',base:'2xl'}}>Service Options</Heading>
                            <Text fontSize={{md:"lg",sm:'sm',base:'sm'}} textAlign="center">All our services are affordable and require direct contacts and emails</Text>
                        </Flex>
                    </Flex>
                    <Flex  w="100%">
                        <Grid mt="100px" w="100%" templateColumns={{
      sm:"repeat(1,1fr)",
      md:"repeat(2,1fr)",
      lg:"repeat(2,1fr)",
      xl:"repeat(3,1fr)",
      base:"repeat(1,1fr)"
  }} gap="6">
                           <ServicesItems/>
                        </Grid>
                    </Flex>
                </Flex>
            </Container>
        </Box>

    )
}

export default Services



const  ServicesItems = ()=>{
    let services = [{service:'3D Product Visualisation',about:'Do you have a product concept that you want designed. then this is the service for you'},
{service:'Arch Visualisation',about:'Arch Visualisation is also available'},
{service:'3D Animation for Music and Films',about:'We are known for our affiliation with entertainment and music. We got this covered for you '},
{service:'3D Advertisments',about:'Do you have a product that needs advertising. Do you want to make your customers anticipate a product, then this is the service for you'},]
    return(
        <>
        {
            services.map((val,index)=>(
                <Flex key={index} borderColor={'grey'} bg="white" borderRadius={'10%'} w="100%" h="90%" flexDir="column" position="relative">
                                <Flex h="80%" borderRadius={'10%'} flexDirection="column" justifyContent="flex-end" w="100%">
                                    <Flex h="60%" p="3" w="100%" flexDir="column" justifyContent={'center'}>
                                        <Heading w="100%" textAlign="center" px="5" fontSize="2xl">{val.service}</Heading>
                                        <Text px="6" textAlign="center"> {val.about}</Text>
                                    </Flex>
                                </Flex>
                                <Flex justifyContent={'center'} position="absolute" top="0" height="100px" width={'100%'} >
                                    <Flex width="100px" boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}  height="100px" bg="grey" borderRadius="full" mt={'-50px'} ></Flex>
                                </Flex>
                                <Flex h="200px"  borderBottomRadius={'10%'} alignItems="center" justifyContent={'center'} w="100%">
                                    <Box  >
                                        <Button _hover={{ color: 'white', background: "#000000" }} width="100%" background={'black'} color="white" rounded="full">Enquire Now</Button>
                                    </Box>
                                </Flex>
                            </Flex>
            ))
        }
        </>
    )
}