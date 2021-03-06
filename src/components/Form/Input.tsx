import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}


export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label &&  <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput 
          name={name}
          id={name}
          focusBorderColor='pink.500' 
          backgroundColor='gray.900'
          variant='filled'
          _hover={{ backgroundColor: 'gray.900' }}
          size='lg' //large 
          {...rest}
        />
    </FormControl>
  )
}