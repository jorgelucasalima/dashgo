import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Jorge Lucas Lima</Text>
        <Text color='gray.300' fontSize='small'>jorgelucasalima@gmail.com</Text>
      </Box>
      
      <Avatar size='md' name='Jorge Lima' src='https://github.com/jorgelucasalima.png'/>
    </Flex>
  
  )
}