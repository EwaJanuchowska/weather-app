import React from "react";
import Emoji from "a11y-react-emoji";
import { fahrenheitToCelsius, mphToKph } from "../../utils/unitsConverter";
import WeatherSymbol from "../WeatherSymbol";

import "./CurrentWeatherInfoTile.scss";

const CurrentWeatherInfoTile = ({
  weatherType,
  temperature,
  precipProbability,
  humidity,
  windSpeed
}) => (
  <div className="CurrentWeatherInfoTile">
    <WeatherSymbol className="weather-symbol" type={weatherType} />

    <div className="temperature">
      {Math.round(fahrenheitToCelsius(temperature))}&deg;
    </div>

    <div className="summary">
      <div className="summary-item">
        <Emoji
          className="summary-item-icon"
          symbol="☔️"
          label="Precipitation probability"
        />
        {Number(precipProbability * 100).toFixed(0)}%
      </div>
      <div className="summary-item">
        <Emoji className="summary-item-icon" symbol="💧" label="Humidity" />
        {Number(humidity).toFixed(0)}%
      </div>
      <div className="summary-item">
        <Emoji className="summary-item-icon" symbol="💨" label="Wind speed" />
        {Math.round(mphToKph(windSpeed))}&nbsp;km/h
      </div>
    </div>
  </div>
);

export default CurrentWeatherInfoTile;
