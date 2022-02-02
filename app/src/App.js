import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SimpleWeatherCard } from './Components/CurrentWeather';
import { GET_CURRENT_WEATHER } from './GraphQL/Queries';
import './App.css';
import Graph from './Components/Graph';

import { BarLoader } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const App = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_WEATHER);
  var content;
  if (loading) {
    content = <div><BarLoader css={override} size={150} color={"#123abc"} loading={true} speedMultiplier={1.5} /></div>;
  }
  if (error) {
    content = <div> Something went wrong..Oops</div>;
  }

  if (data) {
    content = <SimpleWeatherCard data={data} loading={loading} error={error} />
  }

  if (data || loading || error) {
    return (
      <>
        <div className='container-fluid' >
          <div id='title'>Wetter in Basel</div>
          {content}
          <div id='sub'>7 Tage Wetter in Basel</div>
          <div id='card1'>Tomorrow</div>
          <div id='card2'>TODO</div>
          <div id='card3'>TODO</div>
          <div id='card4'>TODO</div>
          <div id='card5'>TODO</div>
          <div id='card6'>TODO</div>
          <div id='card7'>TODO</div>
          <div id='card8'>The day in a week</div>
          {/* <h1>Aktuelles Wetter in Basel</h1>
          <CurrentWeather />
          <h1>7-Tage-Wetter</h1>
          <WeatherForecast /> */}
        </div>
        <div id='sub2'>Graph</div>
        <Graph></Graph>
      </>
    )
  }
}

export default App;