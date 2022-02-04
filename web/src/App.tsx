import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App

export const theme = extendTheme({
  fonts: {
    body: 'Open Sans',
    heading: 'Open Sans',
  },
  styles: {
    global: (props: GlobalStylesProps) => ({
      body: {
        backgroundColor: '#FAFDFF',
      },
    }),
  },
})

interface GlobalStylesProps {
  colorMode: string
}
