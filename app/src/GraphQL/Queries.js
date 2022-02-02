import { gql } from '@apollo/client'

export const GET_CURRENT_WEATHER = gql`
query{
  getCityByName(name: "Basel", config: {units: metric, lang: de}) {
    id
      weather {
        summary {
          description
          icon
        }
        temperature {
          actual
          min
          max
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;
