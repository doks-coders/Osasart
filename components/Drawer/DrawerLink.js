import {Drawer,DrawerOverlay, DrawerContent,Box, DrawerHeader, DrawerBody, DrawerFooter,useDisclosure,DrawerCloseButton,List,ListItem,Divider,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const DrawerLink = ({links}) => {
    
    return (
    <>
       {links.map((val,index)=>(
        <Box key={index} >
       <Link href={val.link}>
        <ListItem    p="5"  _hover={{
      background: "#242424",
      color: "white",
      transition:'background 0.5s',
   
      
    }}>
  
      {val.name}
    
    </ListItem>
    </Link>
    
    <Divider />
        </Box>
      ))}
    </>
  )
}

export default DrawerLink

