import styles from "./WeatherPanel.module.css";
import ListIcon from "../assets/ListIcon.jsx";

export default function Header({weather}){
    return(
        <div className={styles.Header}>
            <h1>{weather.city || "N/A"}</h1>
            <ListIcon/>
        </div>
    )
}