import React from 'react'
import { Box, Text, Image,Flex, Input, FormControl, Button, Container } from '@chakra-ui/react'

const footerbottom = () => {
  return (
    <Box mt={20} color="#ffffff"  background="linear-gradient(-90deg, grey,#545871)" py="10">
     <Container maxWidth="container.xl">
        <Flex w="100%" display={{sm:'none',lg:'flex',md:'none',base:'none'}} >
          <Flex w="20%" flexDirection="row" justifyContent="center">
          <Flex flexDirection="column" justifyContent="space-between" >
            <Text>OSASART</Text>
            <Text>designed by Daventy @2022</Text>
          </Flex>
          </Flex>
          <Flex w="20%" flexDirection="row" justifyContent="center">
          <Flex flexDirection={'column'} justifyContent="space-between" >
            <Text>About Us</Text>
            <Text>Contacts</Text>
            <Text>Terms and Conditions</Text>
          </Flex>
          </Flex>
          
          <Flex w="20%" flexDirection="row" justifyContent="center">
          <Flex flexDirection={'column'} justifyContent="space-between" >
            <SocialLinks />
          </Flex>
          </Flex>
          <Flex w="20%" flexDirection="row" justifyContent="center">
          <Flex flexDirection={'column'} justifyContent="space-between" >
            <Text>Subscribe To Our Newsletter</Text>
            <FormControl mt="5">
              <Box >
                <Flex w="100%"  alignContent="center">
                  <Input
                    borderColor={"white"}
                    _placeholder={{color:'white'}}
                    placeholder="Email Address"
                    type="text"
                    w={'80%'}>
                  </Input>
                  <Button variant={'solid'} borderColor={"white"} >
                   <Text color="black">OK</Text> 
                  </Button>
                </Flex>
              </Box>
            </FormControl>
          </Flex>
          </Flex>
          <Flex w="20%" flexDirection="row" justifyContent="center">
          <Flex flexDirection="column" justifyContent="space-between" >
            <Text>Silicon Valley Road</Text>
            <Text>+23496531778</Text>
            <Text>daventyagency@mail.com</Text>
          </Flex>

          </Flex>
          
          


        </Flex>


        <Flex w="100%" flexDirection="column" display={{sm:'flex',md:'flex',lg:'none',base:'flex'}} >
          <Flex w="100%" flexDirection="row" >
          <Flex flexDirection="column" justifyContent="space-between" >
            <Text>OSASART</Text>
            <Text>designed by Daventy @2022</Text>
          </Flex>
          </Flex>
          <Flex w="100%" mt="20px" flexDirection="row" >
          <Flex flexDirection={'column'} justifyContent="space-between" >
            <Text>About Us</Text>
            <Text>Contacts</Text>
            <Text>Terms and Conditions</Text>
          </Flex>
          </Flex>
          
          <Flex w="100%" mt="20px" flexDirection="row" >
          <Flex flexDirection={'row'} justifyContent="space-between" >
            <SocialLinks />
          </Flex>
          </Flex>
          <Flex w="100%" mt="20px" flexDirection="row" >
          <Flex flexDirection={'column'} justifyContent="space-between" >
            <Text>Subscribe To Our Newsletter</Text>
            <FormControl mt="5">
              <Box >
                <Flex w="100%"  alignContent="center">
                  <Input
                    borderColor={"white"}
                    _placeholder={{color:'white'}}
                    placeholder="Email Address"
                    type="text"
                    w="80%">
                  </Input>
                  <Button variant={'solid'} borderColor={"white"} >
                   <Text color="black">OK</Text> 
                  </Button>
                </Flex>
              </Box>
            </FormControl>
          </Flex>
          </Flex>
          <Flex w="100%" mt="20px" flexDirection="row" >
          <Flex flexDirection="column" justifyContent="space-between" >
            <Text>Silicon Valley Road</Text>
            <Text>+23496531778</Text>
            <Text>daventyagency@mail.com</Text>
          </Flex>

          </Flex>
          
          


        </Flex>
      
        </Container>
    </Box>
  )
}

export default footerbottom


/**
 * 
 * 
 */

const SocialLinks = () => {
  let socialLinks = ['Instagram', 'Facebook', 'Twitter']
  return (
    <>
      {
        socialLinks.map((val,index) => (
          <Flex key={index}>
            <Image
              borderRadius={"full"}
              border="1px"
              borderColor="gray.200"
              boxSize="20px"
              mr={{sm:'2',lg:'6',md:'2',base:'2'}}
              src={`Images/${val.toLowerCase()}.png`}
            />
            <Text display={{lg:'block',md:'none',sm:'none',base:'none'}}>{val}</Text>

          </Flex>
        ))

      }
    </>
  )
}