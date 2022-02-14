import { Flex, Button, Stack } from '@chakra-ui/react'
import Input from '../components/Form/Input'


export default function SignIn() {
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
          <Input name='email' type='email' label='E-mail'/>
          <Input name='password' type='password' label='Senha'/>

         
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
