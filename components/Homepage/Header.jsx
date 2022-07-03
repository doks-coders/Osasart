import React from 'react'
import { Box, Flex, Image, Heading,AspectRatio,List,ListItem,Divider, Button, Container, Text, Grid, Badge, FormControl, Input,} from '@chakra-ui/react'
import Link from 'next/link'
import VoxelDog from './voxel-car'
import SimpleDrawer from '../Drawer/SimpleDrawer'
import SimpleModal from '../Modal/SimpleModal'

const Header = ({onScroll}) => {


  
  return (
    <Box  height={'700px'} >
   

        <Box maxW="1800px" mx="auto" as="div" position="relative" h="100%"  w="100%">
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
                    OSASART STUDIOS
                  </Heading>
                  <Box height={{md:'3px',sm:'1px',base:'1px'}} background="white" w="30%"></Box>
                  </Flex>
                 
                </Flex>
              </Flex>
              <Flex display={{sm:'none',md:'flex',base:'none'}}  minW="25%" mr="10px" alignItems="center">
                <HeaderLinks />
              </Flex>
              <Flex display={{sm:'flex',md:'none',base:'flex'}} w="8%" mr="10px" alignItems="center">
 <SimpleDrawer btnColor={'white'}/>
              </Flex>
            </Flex>
{/*Banner Part*/}
            <Flex w="100%" flexDirection={{md:'row',sm:'column',base:'column'}} height="80%"  >
              <Flex  h={{sm:'50%',md:'100%',base:'50%'}}  w={{sm:'100%',md:'50%',base:'100%'}} justifyContent={'center'} alignItems="center">
             
               <Flex  w="80%" h="40%" flexDirection="column" justifyContent={'space-between'} >
                  <Heading color="#FFFFFF" textAlign={{md:'left',sm:'center',base:'center'}} fontSize={{md:"5xl",sm:'3xl',base:'3xl'}}> 3D Digital Content Services at its peak</Heading>
                  <Flex justifyContent={{md:'flex-start',sm:'center',base:'center'}} >
                

                    <Button onClick={onScroll}  _hover={{color:'black',background:"white"}} mt="40px" variant="outline" color="white" rounded="full">Lets Get Started</Button>  
   

                  </Flex>
                </Flex>
             </Flex>
              <Flex h={{sm:'50%',md:'100%',base:'50%'}} w={{sm:'100%',md:'50%',base:'100%'}}  justifyContent={'center'} alignItems={{md:'center',sm:'',base:''}} >
               {/*<VoxelDog/>*/}
              {true && <VoxelDog/>}  
              </Flex>
            </Flex>
          </Flex>
        </Box>

    </Box>
  )
}

export default Header


const HeaderLinks = () => {

  let linkArray = [{ name: 'About us',link:'/' }, { name: 'Blog',link:'/blog' }, { name: 'Services',link:'/' }, { name: 'Sign up',link:'/' }]
  return (
    <>
      <Flex color="#FFFFFF" w="100%" >
        {
          linkArray.map((val,index) => (
            <Text key={index} p="10px" as="div">
              <Link href={val.link}>
                {val.name}
              </Link>
            </Text>
          ))
        }
      </Flex>
    </>
  )
}


