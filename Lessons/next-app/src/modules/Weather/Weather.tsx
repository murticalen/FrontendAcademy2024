import { Box, Flex, Text } from '@kuma-ui/core'
import { CitiesWeather } from './component/CitiesWeather'

export const Weather = () => {
  return (
    <>
      <Box as='header' bg='colors.primary' h='64px' p='spacings.sm'>
        <Flex h='48px' bg='colors.surface.s1' px='spacings.lg' borderRadius='14px' alignItems='center' gap='24px'>
          <Box bg='colors.surface.s2' h='24px' w='24px'>O</Box>
          <Text fontSize='16px' color='colors.onSurface.nLv2'>Search</Text>
        </Flex>
      </Box>
      <Box as='h3' h='48px' pt='spacings.lg' px='spacings.lg'>
        <Text fontSize='14px' color='colors.onSurface.nLv2'>Recent</Text>
      </Box>

      <CitiesWeather />
    </>
  )
}
