import React from "react";
import { Box } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  Title,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import formatUnixDate from "../../utils/formatUnixDate";
import { fahrenheitToCelsius } from "../../utils/unitsConverter";

import "./ForecastHourly.scss";

const ForecastHourly = ({ data }) => {
  const chartData = data.map(({ time, temperature, precipProbability }) => {
    return {
      time: formatUnixDate(time, "HH"),
      temperature: Math.round(fahrenheitToCelsius(temperature)),
      precipProbability
    };
  });

  return (
    <div className="ForecastHourly">
      <Box
        textAlign="center"
        fontSize="h5.fontSize"
        fontFamily="h6.fontFamily"
        lineHeight={2}
      >
        Prognoza na najbliższe godziny
      </Box>

      <Box className="chart-data">
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={17} />

          <BarSeries
            valueField="temperature"
            argumentField="time"
            color={pink["500"]}
          />
          <Title text="Temperatura" />
          <Animation />
        </Chart>
      </Box>

      <Box className="chart-data">
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis tickFormat={scale => scale.tickFormat(null, "%")} />

          <BarSeries
            valueField="precipProbability"
            argumentField="time"
            color={pink["500"]}
          />
          <Title text="Opady" />
          <Animation />
        </Chart>
      </Box>
    </div>
  );
};

export default ForecastHourly;
