import {Flex} from '@chakra-ui/react'
import {RiSearchLine, RiNotificationLine, RiUserAddLine} from 'react-icons/ri'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  return (
    <Flex
      as='header'
      width='100%'
      maxWidth={1480}
      height='20'
      marginX='auto'
      marginTop='16'
      px='6'
      align='center'
    >
      
      <Logo/>

      <SearchBox/>

      <Flex align='center'ml='auto'>
        <NotificationsNav/>
        <Profile />
      </Flex>


    </Flex>
  )
}