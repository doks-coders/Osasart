import React from 'react'
import { Box, Flex, Image, Heading, Link, Button, Container,Divider, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

const Bonus = () => {

   
    let openLink = (link)=>{
        window.open(link, "_blank")
    }
    return (
        <Box  mt={{md:"100px",sm:'200px',base:'200px'}}>
            <Container h={{md:"600px",sm:'100%',base:'100%'}} maxW="container.xl">
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
                            <Heading fontSize={{base:"xl",md:'3xl',sm:'xl'}} color="white">Check Out Our Youtube!</Heading>
                            <Divider mt="25px"/>
                            <Text fontSize={{base:"md",md:'2xl',sm:'md'}} color="white" mb="50px" mt="25px">
                            Osasart is a prominent animation production studio that specializes in 3D animations and illustrations, as well as visual effects and motion graphics artwork. Our efforts help to raise awareness of new products and research projects by serving as both promotion and inspiration.
                              Visit our channel to see what we have done.</Text>
                            <Box >
                                <Button onClick={()=>{openLink('http://www.youtube.com/channel/UCMP78kZlE3_7elXTXMzIhdA')}} _hover={{ color: 'white', background: "#000000" }} width="100%" background={'black'} color="white" rounded="full">Go To Channel</Button>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Bonus