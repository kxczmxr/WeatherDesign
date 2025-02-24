import styles from "./WeatherPanel.module.css";
import {getWeatherIcon} from "../assets/WeatherStatusIcon.jsx";

export default function MainInfo({weather}) {
    const todayIcon = weather ? getWeatherIcon(weather.forecast[0].icon) : "";
    return(
        <div className={styles.MainInfo}>
            <div className={styles.Info}>
                <h3>{Math.round(weather.forecast[0]?.temp) ?? "N/A"}°C</h3>
                <p>{weather.forecast[0]?.description || "No data"}</p>
            </div>
            <div className={styles.Image}>
                {/*<div id={'today-icon'} dangerouslySetInnerHTML={{__html: todayIcon}}/>*/}
                {todayIcon}
            </div>
        </div>
    )
}