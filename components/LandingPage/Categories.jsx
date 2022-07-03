import React from 'react'
import { Box, Flex, Image, Heading, Button, Container, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import Link from 'next/link'
const Categories = () => {
  return (
    <Box h="700px" mt={{md:"100px",sm:'150px',base:'150px'}}>
<Container maxW="container.xl" h="100%">
<Flex w="100%" h="100%" flexDirection={{sm:'column',md:'row',base:'column'}}>
    <Flex w={{sm:'100%',md:'50%',base:'100%'}} justifyContent={'center'} alignItems="center" >
<Flex  justifyContent="center" flexDir={'column'} w="80%" h="80%">
<Heading>High Fidelity Graphics and Designs in Realtime </Heading>
<Text my="10">If you are looking for the best place to create good quality 
3D designs for your design project or website, look no further. OsasArt Inc provides the best quality 3D design services for you and your team </Text>
<Box >
                    <Button _hover={{color:'white',background:"grey"}} mt="40px" background={'black'} color="white" rounded="full">Contact Us Now</Button>
                  </Box>
</Flex>
    </Flex>
    <Flex w={{sm:'100%',md:'50%',base:'100%'}}   justifyContent={'center'} alignItems="center">
<Flex w="80%" h="80%" > 
<Grid boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} w="100%" templateColumns={'repeat(2,1fr)'} gap="3">
          <Image objectFit="cover" height="100%" width="100%" src="Paw/Shirt.png"></Image>
          <Image objectFit="cover" height="100%" width="100%" src="Paw/gun.png"></Image>
          <Image objectFit="cover" height="100%" width="100%" src="Paw/fila.png"></Image>
          <Image objectFit="cover" height="100%" width="100%" src="Paw/building.png"></Image>
        </Grid>
</Flex>
    </Flex>
</Flex>
</Container> 
</Box>
  )
}

export default Categories