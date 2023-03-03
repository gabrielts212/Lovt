import React from 'react'
import {Box,Flex, Heading,Text,SimpleGrid} from '@chakra-ui/react'
import Image from "next/image";
import t from "../../assets/images/t.svg";
const body2 = () => {
  return (
    <div>
<Flex justify="center"   align="flex-end" >
<SimpleGrid columns={[1 ,2, 2]}  justify="center"  gap="20">

<Image src={t} alt="" width="150px" h="150px" />
<Image src={t} alt="" width="150px" h="150px" />

</SimpleGrid>
</Flex>
     
    </div>
  )
}

export default body2