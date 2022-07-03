import React from 'react'
import { Box, Flex, Image, Heading, Button, Container,Divider, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import Link from 'next/link'
const Bonus = () => {
    return (
        <Box h="600px" mt={{md:"100px",sm:'200px',base:'200px'}}>
            <Container h="100%" maxW="container.xl">
                <Flex w="100%" h="100%" flexDirection={{
      sm:"column",
      md:"row",
      lg:"row",
      xl:"row",
      base:"column"
  }} >
                    <Flex w={{sm:'100%',md:'50%',base:'100%'}} >
                        <Image src={'Paw/vr.png'} height="100%" w="100%" objectFit="cover"></Image>
                    </Flex>
                    <Flex w={{sm:'100%',md:'50%',base:'100%'}} background={'#545871'} justifyContent="center" alignItems={'center'} >
                        <Flex w="80%" h="80%" py="8" flexDirection="column" justifyContent={'center'}>
                            <Heading color="white">Check Out Our Youtube!</Heading>
                            <Divider mt="25px"/>
                            <Text fontSize="xl" color="white" mb="50px" mt="25px">OsasArt Inc is an animation based company that deals with animations and effects of different kinds. We also provide tutorial videos to help 3D artists like you to perform better</Text>
                            <Box >
                                <Button _hover={{ color: 'white', background: "#000000" }} width="100%" background={'black'} color="white" rounded="full">Go To Channel</Button>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Bonus