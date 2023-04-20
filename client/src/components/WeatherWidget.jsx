import { Typography, useTheme, TextField } from "@mui/material";
// import { GiBarometer } from 'react-icons/gi';
import {
  WiStrongWind,
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiBarometer,
} from "react-icons/wi";
import WidgetWrapper from "./WidgetWrapper";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import setCity from "../state";
import axios from "axios";
import { Autocomplete } from "@mui/material";
import citiesJSON from "../cities.json";

const cities = citiesJSON.map((city) => city.name);

const WeatherWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const [city, setCityValue] = useState("");
  const [weather, setWeather] = useState(null);
  const dispatch = useDispatch();

  const getWeather = (city) => {
    const apiKey = "a974285ba60952542544c2e906e40532";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  };

  const handleCityChange = (event, value) => {
    setCityValue(value);
  };

  const handleGetWeather = () => {
    dispatch(setCity(city));
  };

  useEffect(() => {
    if (!city) {
      getWeather("Moscow");
    } else {
      getWeather(city);
    }
  }, [city]);

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return <WiDaySunny />;
      case "Clouds":
        return <WiCloudy />;
      case "Rain":
      case "Drizzle":
      case "Thunderstorm":
        return <WiRain />;
      case "Snow":
        return <WiSnow />;
      default:
        return <WiDaySunny />;
    }
  };

  const getWindIcon = (windSpeed) => {
    if (windSpeed) {
      return <WiStrongWind />;
    }
  };

  return (
    <WidgetWrapper>
      <Typography color={dark} variant="h2" fontWeight="500" mb="1rem">
        Погода
      </Typography>
      <Autocomplete
        pb="1rem"
        options={cities}
        renderInput={(params) => (
          <TextField {...params} label="Выберите город" variant="outlined" />
        )}
        onChange={handleCityChange}
      />

      {weather && (
        <>
          <Typography
            display="flex"
            gap="0.5rem"
            color={dark}
            variant="h2"
            fontWeight="500"
            p="1rem 0rem 1rem 0rem"
          >
            {weather.name}, {Math.round(weather.main.temp) - 273} °C
            {getWeatherIcon(weather.weather[0].main)}
          </Typography>
          <Typography color={medium} variant="h5">
            <WiBarometer />
            {`Давление: ${weather.main.pressure} гПа`}
          </Typography>
          <Typography color={medium} variant="h5">
            <WiStrongWind />
            {`Скорость ветра: ${weather.wind.speed} м/с`}
          </Typography>
        </>
      )}
    </WidgetWrapper>
  );
};

export default WeatherWidget;
