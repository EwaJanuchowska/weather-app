import React from "react";
import { Paper } from "@material-ui/core";
import Emoji from "a11y-react-emoji";
import formatUnixDate from "../../utils/formatUnixDate";
import WeatherSymbol from "../WeatherSymbol";

import "./WeatherInfoTile.scss";

const WeatherInfoTile = ({
  weatherType,
  temperatureDay,
  temperatureNight,
  precipProbability,
  humidity,
  windSpeed,
  date
}) => (
  <Paper square elevation={2} className="WeatherInfoTile">
    {date && (
      <div className="date-time">
        <div>{formatUnixDate(date, "iii")}</div>
        <div>{formatUnixDate(date, "dd.MM")}</div>
      </div>
    )}

    <WeatherSymbol className="weather-symbol" type={weatherType} />

    <div className="temperature">
      <div className="day">{temperatureDay}&deg;</div>
      <div className="night">{temperatureNight}&deg;</div>
    </div>

    <div className="summary">
      <div className="summary-item">
        <Emoji
          className="summary-item-icon"
          symbol="☔️"
          label="Szansa opadów"
        />
        {precipProbability}%
      </div>
      <div className="summary-item">
        <Emoji className="summary-item-icon" symbol="💧" label="Wilgotność" />
        {humidity}%
      </div>
      <div className="summary-item">
        <Emoji className="summary-item-icon" symbol="💨" label="Wiatr" />
        {windSpeed}&nbsp;km/h
      </div>
    </div>
  </Paper>
);

export default WeatherInfoTile;
