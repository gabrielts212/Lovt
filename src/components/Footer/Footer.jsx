import React from 'react'
import {Box,Flex, Heading,Text,SimpleGrid} from '@chakra-ui/react'
import Image from "next/image";
import Mapa from "../../assets/images/mapa.svg";
const Footer = () => {
  return (
    <div>

<Flex  bg="#333333" h="243px" align="center" justify="center"  >
  

<SimpleGrid columns={[1 ,2, 2]}  justify="center" gap="20">

<Flex h="163px" w="252px" gap="20">
<Image src={Mapa} alt="" width="250px" h="150px"gap="20" />
  
</Flex>

<Flex h="163px" w="252px" color='white' >
LOVT - You love, your loft!

Broad St,
Newark, NJ 07102 - USA

+1 (973) 854-555-548

contact@lovtrealstate.com




</Flex >
</SimpleGrid>
 
</Flex>

    </div>
  )
}

export default Footer