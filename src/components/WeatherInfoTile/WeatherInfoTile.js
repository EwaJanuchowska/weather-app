import React from "react";
import { Paper } from "@material-ui/core";
import WeatherSymbol from "../WeatherSymbol";
import Emoji from "a11y-react-emoji";

import "./WeatherInfoTile.scss";

const WeatherInfoTile = ({ weatherType, temperature }) => (
  <Paper square elevation={2} className="WeatherInfoTile">
    <div class="date-time">
      <div>czw.</div>
      <div>5.03</div>
    </div>

    <WeatherSymbol className="weather-symbol" type={weatherType} />

    <div class="temperature">
      <div class="day">23&deg;</div>
      <div class="night">9&deg;</div>
    </div>

    <div class="summary">
      <div class="summary-item">
        <Emoji
          className="summary-item-icon"
          symbol="☔️"
          label="Szansa opadów"
        />
        8%
      </div>
      <div class="summary-item">
        <Emoji className="summary-item-icon" symbol="💧" label="Wilgotność" />
        56%
      </div>
      <div class="summary-item">
        <Emoji className="summary-item-icon" symbol="💨" label="Wiatr" />
        100%
      </div>
    </div>
  </Paper>
);

export default WeatherInfoTile;
