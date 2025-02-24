import styles from './WeatherPanel.module.css';
import { useWeather } from "../store/WeatherContext.jsx";
import { getWeatherClassName } from "../assets/getWeatherClassName.jsx";
import NextDays from "./NextDays.jsx";
import TodayStats from "./TodayStats.jsx";
import Header from "./Header.jsx";
import MainInfo from "./MainInfo.jsx";

export default function WeatherPanel() {
    const { weather, error } = useWeather();

    const todayClassName = weather ? getWeatherClassName(weather.forecast[0].icon) : "";

    return (
        <>
            {error && <div>{error}</div>}
            <div className={`${styles.WeatherPanel} ${styles[todayClassName]}`}>
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