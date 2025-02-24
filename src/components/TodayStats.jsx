import styles from "./WeatherPanel.module.css";
import WindIcon from "../assets/WindIcon.jsx";
import HumidityIcon from "../assets/HumidityIcon.jsx";
import VisibilityIcon from "../assets/VisibilityIcon.jsx";

export default function TodayStats({weather}){
    return(
        <div className={styles.Stats}>
            <div>
                <WindIcon/>
                <p>{Number(weather.forecast[0].wind.toFixed(1))} km/h</p>
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
    )
}

