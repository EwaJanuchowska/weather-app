import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Container,
  Box
} from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";
import WeatherSymbol from "./components/WeatherSymbol";

const App = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <WbSunny className="main-icon" />
        <Typography variant="h5">Weather app</Typography>
      </Toolbar>
    </AppBar>

    <main className="main-content center">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              textAlign="center"
              fontSize="h5.fontSize"
              fontFamily="h6.fontFamily"
              lineHeight={2}
            >
              Search for your city/region to check the weather
            </Box>
            Symbols:
            <WeatherSymbol type="hot" />
            <WeatherSymbol type="clear" />
            <WeatherSymbol type="partlyCloudy" />
            <WeatherSymbol type="windy" />
            <WeatherSymbol type="snow" />
            <WeatherSymbol type="cloudy" />
            <WeatherSymbol type="scatteredSnow" />
            <WeatherSymbol type="thunderstorms" />
            <WeatherSymbol type="thunderstormsWithRain" />
            <WeatherSymbol type="showers" />
            <WeatherSymbol type="drizzle" />
            <WeatherSymbol type="rainWithSun" />

            <Paper square className="paper"></Paper>
          </Grid>
        </Grid>
      </Container>
    </main>

    <footer className="main-footer">
      <Box textAlign="center" fontFamily="h6.fontFamily" fontSize={12}>
        &copy; 2020 Weather App
      </Box>
    </footer>
  </>
);

export default App;
