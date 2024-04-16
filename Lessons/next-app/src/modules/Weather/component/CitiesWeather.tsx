import { CityCard } from "./CityCard"

export const CitiesWeather = () => {
    return (
        <CityCard city={{name: 'Zagreb', location: {position: 'center', distance: 0}, weather: {temp: 9, type: 'rainy'}}}/>
    )
}