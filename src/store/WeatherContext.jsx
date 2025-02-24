import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherContext = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`http://localhost:8888/api/weather?lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        setWeather(data);
                    } catch (error) {
                        console.error(error);
                        setError('Something went wrong with fetching weather data');
                    }
                },
                () => {
                    setError('Something went wrong with fetching weather data');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    return { weather, error };
};

const WeatherProvider = ({ children }) => {
    const { weather, error } = useWeather();

    return (
        <WeatherContext.Provider value={{ weather, error }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;