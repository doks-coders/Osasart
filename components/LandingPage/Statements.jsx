import React from 'react'
import { Box, Flex, Image, Heading, Button, Container,Divider, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import Link from 'next/link'

const Statements = () => {
  return (
    <Box mt={{md:"100px",sm:'100px',base:'100px'}} mb={{md:"100px",sm:'200px',base:'200px'}} height="700px">
        <Container  height="100%" maxW="container.xl"> 
        <Flex  w="100%" flexDirection={'column'} h="100%">
            <Flex h="25%" justifyContent="center" alignItems="center" >
                <Heading textAlign="center" fontSize={{sm:'2xl',md:'4xl',base:'2xl'}}>What Our Customers Think</Heading>
                 </Flex>
                 <Flex justifyContent="center" mt="50px"  >
                 <Grid w="90%" templateColumns={{
      sm:"repeat(1,1fr)",
      md:"repeat(1,1fr)",
      lg:"repeat(2,1fr)",
      xl:"repeat(2,1fr)",
      base:"repeat(1,1fr)"
  }} gap="6">
        <CommentsItems/>
        </Grid>
                 </Flex>
            <Flex></Flex>    
        </Flex>
        </Container>
    </Box>
  )
}

export default Statements
let CommentsItems = ()=>{
    let comments = [{comments:'This is one the best services I have recieved ever, Osasart has yet to disappoint. ',image:'Paw/image.png',name:'Guon Odokuma'},
    {comments:'I have never seen so much dedication for a single project',image:'Paw/image.png',name:'Franklin Eze'},
    {comments:'I thought I should try something new. This was a marvellous service',image:'Paw/image.png',name:'Obikal Emmanuel'},
    {comments:'Osasart is the go to place for creative designs and 3d models',image:'Paw/image.png',name:'Mordin Precious'},]
    return(
        <>{
            comments.map((val,index)=>(
                <Flex key={index} borderRadius={'10px'} bg="white"  w="100%" py="20px" px={["5px","10px","20px"]} h={"150px"}>
                <Flex w="25%" mr="10px" justifyContent="center" alignItems="center" >
                    <Image borderRadius={'10px'} src={val.image} boxSize="90%" objectFit="cover" ></Image>
                </Flex>
                <Flex w="75%"  flexDirection="column" justifyContent="space-evenly">
                    <Heading fontSize={{md:"lg",sm:'sm',base:'sm'}}>{val.name}</Heading>
                    <Text fontSize={{md:"lg",sm:'sm',base:'sm'}} >{val.comments} </Text>
                </Flex>
                </Flex>
            ))
        }
        </>
     
    )
}
