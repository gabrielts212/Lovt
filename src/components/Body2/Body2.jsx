import React from 'react'
import {Box,Flex, Heading,Text} from '@chakra-ui/react'
import Image from "next/image";
import t from "../../assets/images/t.svg";
const body2 = () => {
  return (
    <div>
      <Flex justify="center" >
<Flex  p="2rem">
<Image src={t} alt="" width="150px" h="150px" />
</Flex>
<Flex  p="2rem" >
<Image src={t} alt="" width="150px" h="150px" />
</Flex>
        </Flex>
    </div>
  )
}

export default body2