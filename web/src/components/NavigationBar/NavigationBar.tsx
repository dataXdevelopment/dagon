import { Box, Flex, Heading, HStack, Icon, VStack } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MdWhatshot, MdDashboard, MdMenuBook } from 'react-icons/md'

const NavigationBarItem = ({ route, icon, text }) => (
  <Box py="4" _hover={{ bg: 'blue.300' }} minW="full" px="8">
    <Link to={route}>
      <HStack>
        <Icon as={icon} boxSize="6" color="blue.900" />
        <Heading fontSize="24px" fontWeight="normal" color="blue.900">
          {text}
        </Heading>
      </HStack>
    </Link>
  </Box>
)
const NavigationBar = () => {
  return (
    <Flex
      flexDir="column"
      align="flex-start"
      justify=""
      minH="100vh"
      bg="blue.100"
      maxW="min"
    >
      <Box pb="40" pt="8" alignSelf="center">
        <HStack>
          <Icon as={MdWhatshot} boxSize="6" color="blue.900" />
          <Heading fontSize="24px" fontWeight="semibold" color="blue.900">
            Dagon
          </Heading>
        </HStack>
      </Box>
      <VStack align="flex-start" spacing="4">
        <NavigationBarItem
          route={routes.tasks()}
          icon={MdDashboard}
          text="Dashboard"
        />
        <NavigationBarItem
          route={routes.metacriticTask()}
          icon={MdMenuBook}
          text="Scrapers"
        />
      </VStack>
    </Flex>
  )
}

export default NavigationBar
