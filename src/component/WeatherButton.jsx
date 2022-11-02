import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './WeatherButton.module.css';
const WeatherButton =  ({lat,lon,getCurrentWeather,getCityWeather}) => {
    const handleClick = (city) => {
        getCityWeather(city);
    };
    return (
        <div className={styles.box}>
            <Button variant="success" onClick={() => getCurrentWeather(lat,lon)}>Current Location</Button>{' '}
            <Button variant="success" onClick={() => handleClick('ToKyo')}>DoKyo</Button>{' '}
            <Button variant="success" onClick={() => handleClick('Bangkok')}>BangKok</Button>{' '}
            <Button variant="success" onClick={() => handleClick('Hanoi')}>Hanoi</Button>{' '}
        </div>
    );
};

export default WeatherButton;