export const getWeatherClassName = (weatherCode) => {
    const classDict = {
        '01d': 'clearSkyDay',
        '02d': 'cloudsDay',
        '03d': 'cloudsDay',
        '04d': 'cloudsDay',
        '09d': 'rainDay',
        '10d': 'rainDay',
        '11d': 'stormDay',
        '13d': 'snowDay',
        '50d': 'fogDay',
        '01n': 'clearSkyNight',
        '02n': 'cloudsNight',
        '03n': 'cloudsNight',
        '04n': 'cloudsNight',
        '09n': 'rainNight',
        '10n': 'rainNight',
        '11n': 'stormNight',
        '13n': 'snowNight',
        '50n': 'fogNight'
    };

    return classDict[weatherCode] || 'clearSkyDay';
};

