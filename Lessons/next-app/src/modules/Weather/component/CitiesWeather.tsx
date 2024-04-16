import { CityData } from "../interface"
import { CityCard } from "./CityCard"

const data: CityData[] = [
    {
        name: "Zagreb",
        location: {
            position: "center",
            distance: 0
        },
        weather: {
            temp: 9,
            type: "rainy"
        }
    },
    {
        name: "San Francisco",
        location: {
            position: "California",
            distance: 9999
        },
        weather: {
            temp: 35,
            type: "sunny"
        }
    }
]

export const CitiesWeather = () => {
    return (
        <>
        {data.map((city, index) => <CityCard key={city.name} city={city} mx="spacings.sm" mt={index === 0 ? undefined : 'spacings.md'}/>)}
        </>
    )
}