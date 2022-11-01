import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './WeatherButton.module.css';
const WeatherButton = () => {
    return (
        <div className={styles.box}>
            <Button variant="success">Current Location</Button>{' '}
            <Button variant="success">DoKyo</Button>{' '}
            <Button variant="success">BangKok</Button>{' '}
            <Button variant="success">Danang</Button>{' '}
        </div>
    );
};

export default WeatherButton;