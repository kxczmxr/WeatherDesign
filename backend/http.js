import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const PORT = 8888;
app.use(cors());
app.use(express.json());
app.get("/api/weather", async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ message: "Bad request, missing parameter" });
        }

        const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                lat,
                lon,
                appid: process.env.WEATHER_API_KEY,
                units: "metric",
            },
        });

        const data = response?.data;
        const forecastData = [];

        const todayData = data.list[0];
        forecastData.push({
            dt: todayData.dt,
            city: todayData.name,
            temp: todayData.main.temp,
            visibility: todayData.visibility,
            wind: todayData.wind.speed,
            humidity: todayData.main.humidity,
            description: todayData.weather[0].main,
            icon: todayData.weather[0].icon
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const nextThreeDays = data.list
            .filter(item => {
                const date = new Date(item.dt * 1000);
                date.setHours(date.getHours() - 1);
                const itemDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                return itemDate > today && date.getHours() === 15;
            })
            .slice(0, 3)
            .map(item => {
                const date = new Date(item.dt * 1000);
                date.setHours(date.getHours());
                return {
                    dt: date.getTime() / 1000,
                    temp: item.main.temp,
                    icon: item.weather[0].icon,
                    description: item.weather[0].description
                };
            });

        forecastData.push(...nextThreeDays);

        const cityName = response.data.city.name;

        res.json({ city: cityName, forecast: forecastData });
    } catch (error) {
        res.status(500).json({ error: error.response?.data || "Something went wrong with fetching weather data" });
    }
});
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


