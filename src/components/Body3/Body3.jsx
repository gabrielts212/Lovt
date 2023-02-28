import React from 'react'
import {Box,Flex, Heading,Text} from '@chakra-ui/react'
import Image from "next/image";
import Mapa from "../../assets/images/mapa.svg";
import Coluna1 from "../../assets/images/coluna1.svg";
const body3 = () => {
  return (
    <div>

<Flex justify="center"  >

<Flex  m="2rem">
<Image src={Coluna1} alt="" width="150px" h="150px" />
   
</Flex>

        </Flex>
<Flex justify="center" gap="50" >

<Flex   m="2rem"  >
<Image src={Coluna1} alt="" width="150px" h="150px" />
  
</Flex>

        </Flex>

<Flex justify="center" gap="50">

<Flex m="2rem"   >
<Image src={Coluna1} alt="" width="150px" h="150px" />
 
</Flex>

        </Flex>
    </div>
  )
}

export default body3