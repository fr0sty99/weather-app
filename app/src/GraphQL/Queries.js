import { gql } from '@apollo/client'

export const GET_FULL_WEATHER_DATA = gql`
  query($lat: Float!, $lon: Float!){
          getWeatherByCoord(lat: $lat, lon: $lon, config:{units:metric, lang: de}) {
              id
              lat
              lon
              timezone
              timezoneOffset
              current {
                dt
                sunrise
                sunset
                temp
                feelsLike
                pressure
                humidity
                dewPoint
                clouds
                visibility
                windSpeed
                windDeg
                rain
                snow
                weather {
                  id
                  main
                  description
                  icon
              }
            }
          }
           getTodaysMinMaxTempByCoord(lat: $lat, lon: $lon, units: metric) {
              min
              max
            }
  }
`;