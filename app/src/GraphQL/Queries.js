import { gql } from '@apollo/client'

export const GET_FULL_WEATHER_DATA = gql`
    query {
      getWeatherByCoord(lat:47.5584, lon:7.5733, config:{units:metric, lang: de, exclude: {current: false, minutely: false, hourly: false, daily: false, alerts: false}}) {
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
          minutely {
            dt
            precipitation
          }
          hourly {
            dt
            temp
            feelsLike
            pressure
            humidity
            dewPoint
            uvi
            clouds
            visibility
            windSpeed
            windGust
            windDeg
            pop
            rain
            snow
            weather {
              id
              main
              description
              icon
            }
          }
          daily {
            dt
            sunrise
            sunset
            moonrise
            moonset
            temp {
              morn
              day
              eve
              night
              min
              max
            }
            feelsLike {
              morn
              day
              eve
              night
            }
            pressure
            humidity
            dewPoint
            uvi
            clouds
            visibility
            windSpeed
          windGust
          windDeg
          pop
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
    }
`;