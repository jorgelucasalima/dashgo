import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpoint, useBreakpointValue } from "@chakra-ui/react"
import { SideBarNav } from "./SideBarNav"


export function Sidebar() {

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={true} placement='left' onClose={()=>{}}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p='4'>
            <DrawerCloseButton mt='6'>
              <DrawerHeader>Navegação</DrawerHeader>

              <DrawerBody>
                <SideBarNav/>
              </DrawerBody>
            </DrawerCloseButton>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
    
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <Sidebar />
    </Box>
  )
}