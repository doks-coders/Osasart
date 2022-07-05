import React from 'react'
import { Box, Flex, Image, Heading, Link, Button, Container, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'

const Categories = ({ inputRef, onScroll }) => {
  return (
    <Box ref={inputRef} h="700px"  mt={{ md: "100px", sm: '150px', base: '150px' }}>
      <Container maxW="container.xl"   h="100%">
        <Flex w="100%"  h="100%" flexDirection={{ sm: 'column', md: 'row', base: 'column' }}>
          <Flex flexBasis={{ sm: '100%', md: '50%', base: '100%' }} justifyContent={'center'} alignItems="center" >
            <Flex  justifyContent="center" flexDir={'column'} w="80%" >
              <Heading>High Definition Graphics and Designs  </Heading>
              <Text my="10">
                Osasart creates high-quality animation for advertising, communication, and visualization. With end-to-end production capabilities, we develop custom digital content adapted to our clients' business aims and requirements.
              </Text>
              <Box >
                <Button onClick={onScroll} _hover={{ color: 'white', background: "grey" }} mt="40px" background={'black'} color="white" rounded="full">View Our Services</Button>
              </Box>
            </Flex>
          </Flex>
          <Flex flexBasis={{ sm: '100%', md: '50%', base: '100%' }} justifyContent={'center'} alignItems="center">
            <Flex  w="80%" h="80%" >
              <Flex boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} h="100%" flexWrap="wrap" w="100%" >
                <Image objectFit="cover" height="50%" width="50%" src="Paw/shirts.png"></Image>
                <Image objectFit="cover" height="50%" width="50%" src="Paw/gun.png"></Image>
                <Image objectFit="cover" height="50%" width="50%" src="Paw/fila.png"></Image>
                <Image objectFit="cover" height="50%" width="50%" src="Paw/building.png"></Image>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Categories