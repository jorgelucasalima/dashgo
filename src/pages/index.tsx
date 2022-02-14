import { Flex, Input, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react'


export default function Home() {
  return (
    
    <Flex 
      width='100vw' 
      height='100vh' 
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        backgroundColor='gray.800'
        padding='8' // 8 de espaçamento é 2rem ou 32px de acordo chakra-ui
        borderRadius={8} //8 px   
        flexDirection='column'  
      >
        <Stack spacing='4' >
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input 
              name='email' 
              type='email'
              id='email'
              focusBorderColor='pink.500' 
              backgroundColor='gray.900'
              variant='filled'
              _hover={{ backgroundColor: 'gray.900' }}
              size='lg' //large 
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input 
              name='password' 
              type='password' 
              id='password'
              focusBorderColor='pink.500' 
              backgroundColor='gray.900'
              variant='filled'
              _hover={{ backgroundColor: 'gray.900' }}
              size='lg' //large 
            />
          </FormControl>
        </Stack>

        <Button 
          type='submit' 
          marginTop='6' 
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
