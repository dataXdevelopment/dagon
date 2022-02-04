import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'src/App'

const withChakra = (StoryFn) => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <ChakraProvider theme={theme}>
        <StoryFn />
      </ChakraProvider>
    </div>
  )
}

export const decorators = [withChakra]
