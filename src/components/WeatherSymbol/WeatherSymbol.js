import React from "react";
import Emoji from "a11y-react-emoji";

import "./WeatherSymbol.scss";

const WeatherSymbol = ({ type, className }) => {
  const symbolsMap = {
    hot: "🌡",
    'clear-day': "☀️",
    "partly-cloudy-day": "⛅️",
    windy: "💨",
    snow: "❄️",
    cloudy: "☁️",
    scatteredSnow: "🌨",
    thunderstorms: "🌩",
    thunderstormsWithRain: "⛈",
    rain: "🌧",
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
