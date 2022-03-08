import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { WeatherCard } from './Components/WeatherCard';
import { GET_FULL_WEATHER_DATA } from './GraphQL/Queries';
import './App.css';
import Graph from './Components/Graph';

// BarLoader
import { BarLoader } from 'react-spinners';
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
  top:  50%;
  left: 25%;
`;

function App() {
  const lat = 47.5584;
  const lon = 7.5733;

  const [detailActive, setDetailActive] = useState(false);
  const { error, loading, data } = useQuery(GET_FULL_WEATHER_DATA,
    { variables: { lat, lon } });

  useEffect(() => {
  }, [error, loading, data]);

  console.log(data);
  if (loading) {
    return <div
      style={{ height: '100vh' }}>
      <BarLoader
        css={override}
        color={"#123abc"}
        width={'50%'}
        height={20}
        loading={true}
        speedMultiplier={1.5} />
    </div>;
  }

  if (error) {
    return <div> Something went wrong..Oops</div>;
  }

  if (data) {
    return (
      <div className='container-fluid'>
        <div id='title'>Wetter in Basel</div>
        <WeatherCard
          data={data.getWeatherByCoord}
          error={error}
          onClick={() => {
            setDetailActive(!detailActive)
          }} />
      </div>
    )
  }
}

export default App;