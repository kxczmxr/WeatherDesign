import styles from './WeatherPanel.module.css';
import VisibilityIcon from "../assets/VisibilityIcon.jsx";
import HumidityIcon from "../assets/HumidityIcon.jsx";
import WindIcon from "../assets/WindIcon.jsx";
import {useEffect, useState} from "react";
import SettingsIcon from "../assets/SettingsIcon.jsx";
import ListIcon from "../assets/ListIcon.jsx";
import { getWeatherIcon } from "../assets/WeatherStatusIcon.jsx";

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

    const todayIcon = weather ? getWeatherIcon(weather.forecast[0].icon) : "";

    return (
        <>
            {error && <div>{error}</div>}
            <div className={styles.WeatherPanel}>
                {weather ? (
                    <div>
                        <div className={styles.Header}>
                            <ListIcon/>
                            <h1>{weather.city || "N/A"}</h1>
                            <SettingsIcon/>
                        </div>
                        <div className={styles.Image}>
                            <div id={'today-icon'} dangerouslySetInnerHTML={{__html: todayIcon}}/>
                        </div>
                        <div className={styles.Info}>
                            <h3>{Math.round(weather.forecast[0]?.temp) ?? "N/A"}°C</h3>
                            <p>{weather.forecast[0]?.description || "No data"}</p>
                        </div>
                        <div className={styles.Stats}>
                            <div>
                                <WindIcon/>
                                <p>{Math.round(weather.forecast[0].wind)} km/h</p>
                            </div>
                            <div>
                                <HumidityIcon/>
                                <p>{weather.forecast[0].humidity}%</p>
                            </div>
                            <div>
                                <VisibilityIcon/>
                                <p>{weather.forecast[0].visibility / 1000} km</p>
                            </div>
                        </div>
                        <div className={styles.NextDays}>
                            <h2>Next 3 Days</h2>
                            {weather.forecast.slice(1, 4).map((day, index) => (
                                <div key={index}>
                                    <p>{new Date(day.dt * 1000).toLocaleDateString("en-EN", { weekday: "long" })}</p>
                                    <div
                                        className={'NextDaysIcon'}
                                        id={`day-${index}`}
                                        dangerouslySetInnerHTML={{ __html: getWeatherIcon(day.icon) }}
                                    />
                                    <p>{Math.round(day.temp)?? "N/A"}°C</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : <p>Loading...</p>}
            </div>
        </>
    )
}