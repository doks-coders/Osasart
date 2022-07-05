import React from 'react'

import {useContext,useState} from 'react'
import 'primeicons/primeicons.css';
import { Box, Flex, Heading, Button, Container, Text, Input,Image  } from '@chakra-ui/react'

import Link from 'next/link'
import Router from 'next/router'

//import {FiHome,FiPieChart,FiDollarSign,FiCalender,FiPlus} from "react-icons/fi" 


import RecentElement from './RecentElement';
import SimpleDrawer from '../Drawer/SimpleDrawer'

import { GlobalContext } from '../../Context/GlobalContext';





const BlogLayout = ({ children,totalNumber,childpath,recentItems,categoryEl }) => {

    const [search,setSearch] = useState('')

       
    

    const openCategory = (category)=>{
        //setCategoryEl(category)

  
               Router.push({
                   pathname: '/blog',
                   query: { page: 1,category:category}
               })
               
           }

           const searchLink = ()=>{
            console.log(search)
            Router.push({
                pathname: '/blog',
                query: {search:search}
            })
           }

 return(
        <Box  >
          
            <Container maxW="1400px">
            <Flex py="10px" background="white"  justifyContent={'space-between'} w="100%" height="20%" >
              <Flex w="60%" justifyContent={'center'} alignItems="center" >
                <Flex w="90%" alignContent={'center'} >
                  <Image borderRadius={'full'} boxSize="40px" mr="10px" objectFit="cover"  src={ "../Paw/icon.png"}></Image>

                  <Flex  flexDirection="column" justifyContent="center">
                  <Heading fontSize={{md:"2xl",sm:'md',base:'md'}} fontWeight="sm" >
                  <Link href="/">
                    <Box>
                  
                    OSASART STUDIOS
                    </Box>
                 
                  </Link>
                    
                  </Heading>
                  <Box height={{md:'3px',sm:'1px',base:'1px'}} background="black" w="30%"></Box>
                  </Flex>
                 
                </Flex>
              </Flex>
           
              <Flex display={{sm:'none',md:'flex',base:'none'}}  minW="25%" mr="10px" alignItems="center">
                <HeaderLinks />
              </Flex>

              <Flex display={{sm:'flex',md:'none',base:'flex'}} w="8%" mr="10px" alignItems="center">
 <SimpleDrawer/>
              </Flex>
            </Flex>

                <Flex justifyContent="center" flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }} w="100%">
                    <Flex  flexBasis="65%" alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'normal' }} flexDirection={'column'} justifyContent={'center'} >
                        {/*Single Post*/}

                        {/**/}
                        {children}
                     
                    </Flex>
                    <Flex my="4" flexDirection="column" boxShadow='0 4px 16px rgb(0 0 0 / 10%)' p="6" background="white" flexBasis="35%" h="100%"

                    >
                        {/*Search*/}
                        <Flex flexDirection="column">
                            <Heading mt="5" fontSize="xl">Search</Heading>
                            <Flex my="3">
                                <Input
                                    borderColor={"black"}
                                    placeholder="Search"
                                    type="text"
                                    

                                    onChange={(e)=>{setSearch(e.target.value)}} 
                                    w="100%">
                                </Input>
                                <Button onClick={()=>searchLink()}  bg="black" color="white"><i className="pi pi-search" ></i></Button>
                            </Flex>
                        </Flex>
                        {/*Categories*/}
                        <Flex mt="10px" flexDir="column">
                            <Heading fontSize="xl">Categories</Heading>

                            <Flex flexDir="column">
                                <CategoriesElement openCategory={openCategory} totalNumber={totalNumber} />
                            </Flex>
                        </Flex>
                        {/*Recent Posts*/}

                        <Flex mt="20px" flexDir="column">
                            <Heading fontSize="xl" my="5">Recent Posts</Heading>
                            <RecentElements recentItems={recentItems}/>
                        </Flex>
                        {/*Tags*/}

                        <Flex mt="20px" flexDir="column">
                            <Heading fontSize="xl" my="5">Tags</Heading>
                            <Flex flexWrap="wrap" w="100%">
                                <TagElement />

                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default BlogLayout


let RecentElements = ({recentItems}) => {
   return (
        <>        
        {
            recentItems.map((val, index) => (
                <RecentElement key={index} heading={val.heading}
                    date={val.date}
                    image={val.image}
                    idEntered={val._id}
                />
            ))
        }
        </>

    )
}


let CategoriesElement = ({ totalNumber,openCategory}) => {

    let categories = [{ name: '3D Animation', count: totalNumber.animation},
    { name: 'Architecture Design', count: totalNumber.design},
    { name: '3D Modelling', count: totalNumber.modelling}]
    return (
        <>
            {
                categories.map((val, index) => (
                   
                     <Text cursor={'pointer'} key={index} as="div" _hover={{ color: 'red' }} onClick={()=>{
                      
                    }} mt="1.5"><Box  onClick={()=>openCategory(val.name)} ><Box>{val.name} <Box as="span">({val.count})</Box></Box></Box></Text>

           

                  
                ))
            }
        </>
    )

}

let TagElement = () => {
    let tags = ['3D', 'Design','Architecture']
    return (
        <>
            {
                tags.map((val, index) => (

                    <Box key={index} mr="2" _hover={{ background: 'red', color: 'white', transition: 'background 0.5s', borderColor: 'black' }} borderColor={'black'} borderWidth="0.5px" p="2">
                      
                       
                        {val}
                       
                           
                       
                    </Box>

                ))
            }
        </>
    )
}


const HeaderLinks = () => {

    let linkArray = [{ name: 'About us',link:'/' },  { name: 'Services',link:'/' }, { name: 'Subscribe',link:"/" }]
    return (
      <>
        <Flex color="black" w="100%" >
          {
            linkArray.map((val,index) => (
              <Text cursor={'pointer'} key={index} p="10px" as="div">
                <Link href={val.link}>
                    <Box>
                    {val.name}
                    </Box>
                  
                </Link>
              </Text>
            ))
          }
        </Flex>
      </>
    )
  }
  