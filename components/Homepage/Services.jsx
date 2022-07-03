import React from 'react'
import { Box, Flex, Image, Heading, Link, Button, Container, Divider, Text, Grid, Badge, FormControl, Input } from '@chakra-ui/react'
import ServicesModal from '../Modal/ServicesModal'
const Services = ({ inputRef }) => {
    return (
        <Box ref={inputRef} mt={{ md: "150px", sm: '200px', base: '200px' }}>
            <Container h="100%" maxW="container.xl">
                <Flex flexDir={'column'} w="100%" h="100%">
                    <Flex justifyContent="center" h="30%" >
                        <Flex w="80%" h="100%" justifyContent={'space-evenly'} alignItems="center" flexDir="column">
                            <Heading textAlign="center" fontSize={{ md: "4xl", sm: '2xl', base: '2xl' }}>Service Options</Heading>
                            <Text fontSize={{ md: "lg", sm: 'sm', base: 'sm' }} textAlign="center">Osasart Studios provides  one of the best 3D quality services at very affordable prices</Text>
                        </Flex>
                    </Flex>
                    <Flex w="100%">
                        <Grid mt="100px" w="100%" templateColumns={{
                            sm: "repeat(1,1fr)",
                            md: "repeat(2,1fr)",
                            lg: "repeat(2,1fr)",
                            xl: "repeat(3,1fr)",
                            base: "repeat(1,1fr)"
                        }} gap="6">
                            <ServicesItems />
                        </Grid>
                    </Flex>
                </Flex>
            </Container>
        </Box>

    )
}

export default Services

const ServicesItems = () => {
    let services = [{
        service: '3D Product Visualisation', about: 'We create 3D models and 3D videos for products. Let us help you create the perfect 3D visualisation product video for your product', image: 'product.png'
        , message: `I am interested in the 3D Product Visualisation Service. Let's talk more on this`
    },
    {
        service: 'Architecture Visualisation', about: 'We specialise in 3D architecture for your concept building. Let us help you create the perfect 3D architecture video for your business ', image: 'arch.png',
        message: `I am interested in the 3D Architecture Visualisation Service. Let's talk more on this`
    },
    {
        service: '3D Animation for Music and Films', about: 'We make 3D animations for media productions. Let us help you create the perfect 3D animation video for your media project', image: 'anim.png',
        message: `I am interested in the 3D Animation for Music and Films. Let's talk more on this`
    },
    {
        service: '3D Advertisments', about: 'Do you have a product that needs advertising. Do you want to make your customers anticipate a product, then this is the service for you', image: 'ad.png',
        message: `I am interested in the 3D Advertisments Service. Let's talk more on this`
    },]
    return (
        <>
            {
                services.map((val, index) => (
                    <Flex key={index} borderColor={'grey'} bg="white" borderRadius={'10%'} w="100%" h="90%" flexDir="column" position="relative">
                        <Flex h="80%" borderRadius={'10%'} flexDirection="column" justifyContent="flex-end" w="100%">
                            <Flex h="60%" p="3" w="100%" flexDir="column" justifyContent={'center'}>
                                <Heading w="100%" textAlign="center" px="5" fontSize="2xl">{val.service}</Heading>

                                <Text px="6" textAlign="center"> {val.about.substring(0, 60) + "..."}</Text>
                            </Flex>
                        </Flex>
                        <Flex justifyContent={'center'} position="absolute" top="0" height="100px" width={'100%'} >
                            <Flex alignItems="center" justifyContent={'center'} width="100px" boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} height="100px" bg="black" borderRadius="full" mt={'-50px'} >
                                <Flex p="4" borderRadius="full" bg="white" width="90%" height="90%">
                                    <Image src={'Paw/' + val.image}></Image>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex h="200px" borderBottomRadius={'10%'} alignItems="center" justifyContent={'center'} w="100%">
                            <Box  >
                                <ServicesModal about={val.about} service={val.service} msg={val.message} />
                            </Box>
                        </Flex>
                    </Flex>
                ))
            }
        </>
    )
}