import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';


export class SimpleWeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMoreInfoActive: false,
            data: props.data,
            loading: props.loading,
            error: props.error,
        }
    }

    handleClick() {
        this.setState({ isMoreInfoActive: !this.state.isMoreInfoActive });
    }

    render() {
        if (this.state.data) {
            const obj = this.state.data.getCityByName.weather;

            if (obj) {
                var iconCode = obj.summary.icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

                return (
                    <div id='simpleweather'>
                        <div id='currentweather'>
                            <Card>
                                <Card.Title><h2>Übersicht</h2></Card.Title>
                                <Card.Body className='row'>
                                    <div>
                                        <Card.Img
                                            variant="top"
                                            src={iconUrl}
                                            alt='Wetter'
                                        />

                                        <ul>
                                            <li>{obj.summary.description}</li>
                                            <li>Temperatur: {obj.temperature.actual} °C</li>
                                            <li>Tagestief: {obj.temperature.min} °C</li>
                                            <li>Tageshoch: {obj.temperature.max} °C</li>
                                        </ul>

                                        <Button style={{ marginBottom: '1rem' }} onClick={() => this.handleClick()}>{this.state.isMoreInfoActive ? 'Less Info' : 'More Info'}</Button>
                                    </div>
                                </Card.Body >
                            </Card >
                        </div>
                        <div id='details'>
                            {this.state.isMoreInfoActive ? (
                                <div>
                                    <Card>
                                        <Card.Title><h2>Details</h2></Card.Title>
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
                                </div>
                            ) : ''}
                        </div>
                    </div>
                );
            }
        }
    }
}