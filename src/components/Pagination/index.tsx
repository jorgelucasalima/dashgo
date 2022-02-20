import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='center'
      align='center'
      spacing='6'
    >
      <Box mr='1'>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacing='2'>
        <PaginationItem number={1} isCurrent/>
        <PaginationItem number={2} isCurrent/>
        <PaginationItem number={3} isCurrent/>
        <PaginationItem number={4} isCurrent/>
      </Stack>
      
    </Stack>
  )
}