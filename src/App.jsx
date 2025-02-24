import './App.css'
import WeatherPanel from "./components/WeatherPanel.jsx";
import WeatherProvider from "./store/WeatherContext";
import MiniPanel from "./components/MiniPanel.jsx";
function App() {

    return (
        <>
            <h1>Weather design</h1>
            <WeatherProvider>
                <WeatherPanel/>
                <MiniPanel/>
            </WeatherProvider>
        </>
    )
}

export default App
