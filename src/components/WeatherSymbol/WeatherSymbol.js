import React from "react";
import Emoji from "a11y-react-emoji";

import "./WeatherSymbol.scss";

const WeatherSymbol = ({ type }) => {
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
      className="WeatherSymbol"
      symbol={symbolsMap[type]}
      label={Object.keys(symbolsMap[type])}
    />
  );
};

export default WeatherSymbol;
