import React from 'react'
import {Box,Flex, Heading,Text} from '@chakra-ui/react'
import Image from "next/image";
import Mapa from "../../assets/images/mapa.svg";
const Footer = () => {
  return (
    <div>

<Flex  bg="#333333" h="300px" align="center" justify="center" gap="20">
  
<Flex h="163px" w="252px" >
<Image src={Mapa} alt="" width="250px" h="150px" />
  
</Flex>
<Flex h="163px" w="252px" >
LOVT - You love, your loft!

Broad St,
Newark, NJ 07102 - USA

+1 (973) 854-555-548

contact@lovtrealstate.com




</Flex >


 
</Flex>

    </div>
  )
}

export default Footer