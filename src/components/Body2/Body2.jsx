import React from 'react'
import {Box,Flex, Heading,Text,SimpleGrid} from '@chakra-ui/react'
import Image from "next/image";
import t from "../../assets/images/t.svg";
const body2 = () => {
  return (
    <div>
<Flex justify="center"   align="flex-end" gap="20" >

<Box bg="white"  h="200px">

<Image src={t} alt="" width="150px" h="150px" />
<Box>

<Text>
AAA
</Text>
</Box>
</Box>
<Box bg="white"  h="200px">

<Image src={t} alt="" width="150px" h="150px" />
<Text>
A
</Text>
</Box>


</Flex>
     
    </div>
  )
}

export default body2