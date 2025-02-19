import styles from './WeatherPanel.module.css';
import VisibilityIcon from "../assets/VisibilityIcon.jsx";
import HumidityIcon from "../assets/HumidityIcon.jsx";
import WindIcon from "../assets/WindIcon.jsx";
export default function WeatherPanel(){
    return(
        <div className={styles.WeatherPanel}>
            <div className={styles.Header}>
                <svg width="70px" height="70px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3e6c70" transform="rotate(0)" stroke-width="0.9600000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#ffffff"></path></g></svg>
                <h1>CITY NAME</h1>
                <svg width="70px" height="70px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3e6c70" stroke-width="1.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"><path d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z" fill="#ffffff"></path><path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z" fill="#ffffff"></path></g></svg>
            </div>
            <div className={styles.Image}>
                <img src="https://openclipart.org/image/2000px/22012" alt="weather"/>
            </div>
            <div className={styles.Info}>
                <h3>25°C</h3>
                <p>Cloudy</p>
            </div>
            <div className={styles.Stats}>
                <div>
                    <WindIcon/>
                    <p>5 km/h</p>
                </div>
                <div>
                    <HumidityIcon/>
                    <p>70%</p>
                </div>
                <div>
                    <VisibilityIcon/>
                    <p>10 km</p>
                </div>
            </div>
            <div className={styles.NextDays}>
                <div>
                    <p>Tomorrow</p>
                    <img src="https://openclipart.org/image/2000px/22012" alt="weather"/>
                    <p>25°C</p>
                </div>
                <div>
                    <p>Tomorrow</p>
                    <img src="https://openclipart.org/image/2000px/22012" alt="weather"/>
                    <p>25°C</p>
                </div>
                <div>
                    <p>Tomorrow</p>
                    <img src="https://openclipart.org/image/2000px/22012" alt="weather"/>
                    <p>25°C</p>
                </div>
            </div>
        </div>
    )
}