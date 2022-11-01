import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './WeatherButton.module.css';
const WeatherButton = ({lat,lon,getCurrentWeather}) => {
    const handleClick = (lat,lng) => {
        getCurrentWeather(lat,lng);
    };
    return (
        <div className={styles.box}>
            <Button variant="success" onClick={() => handleClick(lat,lon)}>Current Location</Button>{' '}
            <Button variant="success" onClick={() => handleClick(35.6894,139.692)}>DoKyo</Button>{' '}
            <Button variant="success" onClick={() => handleClick(13.7474567,100.5540311)}>BangKok</Button>{' '}
            <Button variant="success" onClick={() => handleClick(16.0544068,108.2021667)}>Danang</Button>{' '}
        </div>
    );
};

export default WeatherButton;