import React from 'react'
import {Box,Flex, Heading,Text,SimpleGrid } from '@chakra-ui/react'
import Image from "next/image";
import Mapa from "../../assets/images/mapa.svg";
import Coluna1 from "../../assets/images/coluna1.svg";
const body3 = () => {
  return (
    <div>

<Flex justify="center" >




        <SimpleGrid columns={[2, 1, 1]} >
<Flex justify="center"  color="#AAAAAA">
        <Heading >Your Style</Heading>
</Flex>

<Flex p="2">

        <Image src={Coluna1} alt="" width="150px" h="150px" />
</Flex>
<Flex  p="2">

        <Image src={Coluna1} alt="" width="150px" h="150px" />
</Flex>
<Flex  p="2">

        <Image src={Coluna1} alt="" width="150px" h="150px" />
</Flex>
       
</SimpleGrid>
        </Flex>

    </div>
  )
}

export default body3