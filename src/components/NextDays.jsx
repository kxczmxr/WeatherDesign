import styles from "./WeatherPanel.module.css";
import {getWeatherIcon} from "../assets/WeatherStatusIcon.jsx";

export default function NextDays({weather}){
    return (
        <div className={styles.NextDays}>
            <h2>Next 3 Days</h2>
            {weather.forecast.slice(1, 4).map((day, index) => (
                <div key={index}>
                    <p>{new Date(day.dt * 1000).toLocaleDateString("en-EN", { weekday: "long" })}</p>
                    <div
                        className={'NextDaysIcon'}
                        id={`day-${index}`}
                        dangerouslySetInnerHTML={{ __html: getWeatherIcon(day.icon) }
                        }
                    />
                    <p className={styles.MiniTemp}>{Math.round(day.temp)?? "N/A"}°C</p>
                </div>
            ))}
        </div>
    )
}