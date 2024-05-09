export interface CityLocation {
  position: string
  distance: number
}

export interface CityWeather {
  temp: number
  type: 'sunny' | 'rainy'
}

export interface CityData {
  name: string
  location: CityLocation
  weather: CityWeather
}
