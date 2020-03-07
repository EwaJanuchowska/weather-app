import React from "react";
import Emoji from "a11y-react-emoji";

import "./WeatherSymbol.scss";

const WeatherSymbol = ({ type, className }) => {
  const symbolsMap = {
    hot: "🌡",
    'clear-day': "☀️",
    'clear-night': '🌙',
    rain: "🌧",
    snow: "❄️",
    sleet: '🌨',
    wind: "💨",
    fog: '🌫',
    cloudy: "☁️",
    "partly-cloudy-day": "⛅️",
    'partly-cloudy-night': "☁️",

    thunderstorm: "🌩",
    thunderstormsWithRain: "⛈",
    drizzle: "🌦",
    rainWithSun: "🌦"
  };

  return (
    <Emoji
      className={`WeatherSymbol ${className}`}
      symbol={symbolsMap[type]}
      label={symbolsMap[type] ? Object.keys(symbolsMap[type]) : ""}
    />
  );
};

export default WeatherSymbol;
