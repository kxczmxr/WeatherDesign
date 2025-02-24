import styles from './WeatherPanel.module.css';
import MainInfo from "./MainInfo.jsx";
import { useWeather } from "../store/WeatherContext.jsx";
import {getWeatherClassName} from "../assets/getWeatherClassName.jsx";

export default function MiniPanel() {
    const { weather, error } = useWeather();

    const todayClassName = weather ? getWeatherClassName(weather.forecast[0].icon) : "";

    if (error) return <div>{error}</div>;

    if (!weather) return <div>loading...</div>;

    return (
        <div className={`${styles.MiniPanel} ${styles[todayClassName]}`}>
            <MainInfo weather={weather} />
            <h1>{weather.city || "N/A"}</h1>
        </div>
    );
}