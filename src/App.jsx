import './App.css'
import WeatherPanel from "./components/WeatherPanel.jsx";
import WeatherProvider from "./store/WeatherContext";
function App() {

    return (
        <>
            <h1>Weather design</h1>
            <WeatherProvider>
                <WeatherPanel/>
            </WeatherProvider>
        </>
    )
}

export default App
