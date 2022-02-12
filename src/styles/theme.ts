import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

  colors: {
    gray: {
      900: '#181823',
      800: '#1F2829',
      700: '#353646',
      600: '#484D63',
      500: '#616488',
      400: '#797D9A',
      300: '#9699BB',
      200: '#B3B5C6',
      100: '#D1D2DC',
      50: '#EEEEF2',
    }
  },

  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      }
    }
  }
})