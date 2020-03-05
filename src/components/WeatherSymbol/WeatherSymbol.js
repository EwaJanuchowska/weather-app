import React from "react";
import Emoji from "a11y-react-emoji";

import "./WeatherSymbol.scss";

const WeatherSymbol = ({ type, className }) => {
  const symbolsMap = {
    hot: "🌡",
    clear: "☀️",
    partlyCloudy: "⛅️",
    windy: "💨",
    snow: "❄️",
    cloudy: "☁️",
    scatteredSnow: "🌨",
    thunderstorms: "🌩",
    thunderstormsWithRain: "⛈",
    showers: "🌧",
    drizzle: "🌦",
    rainWithSun: "🌦"
  };

  return (
    <Emoji
      className={`WeatherSymbol ${className}`}
      symbol={symbolsMap[type]}
      label={Object.keys(symbolsMap[type])}
    />
  );
};

export default WeatherSymbol;
