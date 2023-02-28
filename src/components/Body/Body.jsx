import React from 'react'
import {Box,Flex, Heading,Text} from '@chakra-ui/react'
import Image from "next/image";
import Banner1 from "../../assets/images/banner1.png";
const body = () => {
  return (
    <div>
<Flex justify="center" width="100%" height="">
<Flex   m="2rem"  >

<Image src={ Banner1} alt=""  />
</Flex>
        </Flex>
    </div>
  )
}

export default body