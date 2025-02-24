import styles from './WeatherPanel.module.css';
import {useEffect, useState} from "react";
import { getWeatherClassName} from "../assets/getWeatherClassName.jsx";
import NextDays from "./NextDays.jsx";
import TodayStats from "./TodayStats.jsx";
import Header from "./Header.jsx";
import MainInfo from "./MainInfo.jsx";

export default function WeatherPanel() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const {latitude, longitude} = position.coords;
                    try {
                        const response = await fetch(`http://localhost:8888/api/weather?lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        setWeather(data);
                        console.log(data);
                    } catch (error) {
                        console.error(error);
                        setError("FE: Something went wrong with fetching weather data");
                    }
                }, () => {
                    setError("FE: Something went wrong with fetching weather data");
                }
            );
        } else {
            setError("FE: Geolocation is not supported by this browser.");
        }
    }, []);

    const todayClassName = weather ? getWeatherClassName(weather.forecast[0].icon) : "";
    return (
        <>
            {error && <div>{error}</div>}
            <div className={styles.WeatherPanel + " " + styles[todayClassName]}>
                {weather ? (
                    <div>
                        <Header weather={weather}/>
                        <MainInfo weather={weather}/>
                        <TodayStats weather={weather}/>
                        <NextDays weather={weather}/>
                    </div>
                ) : <p>Loading...</p>}
            </div>
        </>
    );
}