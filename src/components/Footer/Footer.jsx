import React from 'react'
import {Box,Flex, Heading,Text} from '@chakra-ui/react'
const Footer = () => {
  return (
    <div>

<Flex  bg="#333333" h="243px" align="center" justify="center" gap="20">
  
<Flex h="163px" w="252px" bg="blue">
    left
</Flex>
<Flex h="163px" w="252px" bg="red">

right 
</Flex >
    
</Flex>

    </div>
  )
}

export default Footer