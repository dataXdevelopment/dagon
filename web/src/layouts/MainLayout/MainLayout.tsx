import { Flex } from '@chakra-ui/react'
import NavigationBar from 'src/components/NavigationBar/NavigationBar'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex>
      <NavigationBar />
      {children}
    </Flex>
  )
}

export default MainLayout
