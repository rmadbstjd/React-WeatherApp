import React from 'react';
import styles from './WeatherInfo.module.css';
function WeatherInfo({info}) {
    console.log("테스트",info);
    return (
        <div className={styles.box}>
            <div>{info && info.name}</div>
            <div>{info && info.main.temp}</div>
            <div>{info && info.weather[0].description}</div>
        </div>
    );
};

export default WeatherInfo;