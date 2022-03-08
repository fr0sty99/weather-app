import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

export function WeatherCard(props) {
    if (props.data) {
        const current = props.data;
        if (false) {
            var iconCode = current.weather.icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

            return (
                <Card id='simpleweather'>
                    <Card.Title>Übersicht</Card.Title>
                    <Card.Body className='row'>
                        <img src={iconUrl}
                            alt='Icon'
                        />
                        <ul>
                            <li>{current.summary.description}</li>
                            <li>Temperatur: {current.temperature.actual} °C</li>
                            <li>Tagestief: {current.temperature.min} °C</li>
                            <li>Tageshoch: {current.temperature.max} °C</li>
                        </ul>
                        <Button onClick={() => props.onClick()}>More Info</Button>
                    </Card.Body >
                </Card >
            );
        }
    }
    return <></>
};

export function DetailWeatherCard(props) {
    if (false) {

        const obj = props.data.getCityByName.weather;
        var className = props.detailActive ? 'visible' : 'hidden';
        return (
            <Card id='detailweather' className={className}>
                <Card.Title>Details</Card.Title>
                <Card.Body className='row'>
                    <ul>
                        <li>Windgeschwindigkeit: {obj.wind.speed} km/h</li>
                        <li>Luftfeuchtigkeit: {obj.clouds.humidity} %</li>
                        <li>Luftdruck: 1018.9 hPa</li>
                        <li>Sonnenaufgang: 07:50</li>
                        <li>Sonnenuntergang: 17:28</li>
                    </ul>
                </Card.Body >
            </Card>
        )
    }

    return <></>
};