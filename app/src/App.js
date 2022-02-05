import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SimpleWeatherCard, DetailWeatherCard } from './Components/CurrentWeather';
import { GET_CURRENT_WEATHER } from './GraphQL/Queries';
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
  const [detailActive, setDetailActive] = useState(false);
  const { error, loading, data } = useQuery(GET_CURRENT_WEATHER);

  if (loading) {
    return <div style={{ height: '100vh' }}><BarLoader css={override} color={"#123abc"} width={'50%'} height={20} loading={true} speedMultiplier={1.5} /></div>;
  }
  if (error) {
    return <div> Something went wrong..Oops</div>;
  }

  if (data) {
    return (
      <>
        <div className='container-fluid' >
          <div id='title'>Wetter in Basel</div>
          <SimpleWeatherCard data={data} error={error} onClick={() => { setDetailActive(!detailActive) }} />
          <DetailWeatherCard data={data} detailActive={detailActive} />
          <div id='sub'>7 Tage Wetter in Basel</div>
          <div id='card1'>Tomorrow</div>
          <div id='card2'>TODO</div>
          <div id='card3'>TODO</div>
          <div id='card4'>TODO</div>
          <div id='card5'>TODO</div>
          <div id='card6'>TODO</div>
          <div id='card7'>TODO</div>
          <div id='card8'>The day in a week</div>
        </div>
        <div id='sub2'>Graph</div>
        <Graph></Graph>
      </>
    )
  }
}

export default App;