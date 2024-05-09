import { Box, BoxProps, Flex, FlexProps, Text } from '@kuma-ui/core'
import { CityData, CityLocation, CityWeather } from '../interface'

const CardHeader = ({ city }: { city: CityData }) => {
  return (
    <Flex gap='spacings.lg' justify='space-between' alignItems='center' h='24px'>
      <Text fontSize='20px' color='colors.onSurface.nLv1'>{city.name}</Text>
      <Box w='24px' h='24px' color='colors.secondary'>S</Box>
    </Flex>
  )
}

const CardContent = ({ city, ...rest }: { city: CityData } & FlexProps) => {
  return (
    <Flex justify={['space-between', 'space-evenly', 'space-between']}
          _hover={{ backgroundColor: 'aquamarine', cursor: 'pointer' }} {...rest}>
      <Location location={city.location} />
      <Weather weather={city.weather} />
    </Flex>
  )
}

const Location = ({ location }: { location: CityLocation }) => {
  return (
    <Box color='colors.onSurface.nLv2'>
      <Text>{location.position}</Text>
      <Text>Distance: {location.distance} km</Text>
    </Box>
  )
}

const Weather = ({ weather }: { weather: CityWeather }) => {
  return (
    <Box color='black'>{weather.type}</Box>
  )
}

export const CityCard = ({ city, ...rest }: { city: CityData } & BoxProps) => {
  return (
    <Box bg='colors.surface.s1' minH='120px' pt='spacings.lg' px='spacings.lg' borderRadius='spacings.md' {...rest}>
      <CardHeader city={city} />
      <CardContent city={city} mt='20px' />
    </Box>
  )
}
