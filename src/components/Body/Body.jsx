import React from 'react'
import {Box,Flex, Heading,Text} from '@chakra-ui/react'
import Image from "next/image";
import Banner1 from "../../assets/images/banner.svg";
const body = () => {
  return (
    <div>
<Flex justify="center"height={["140px", "315px",]} width={["400px", "100%", "100%"]}>
<Flex>
<Image src={ Banner1} alt="" />
</Flex>
        </Flex>
    </div>
  )
}


export default body

