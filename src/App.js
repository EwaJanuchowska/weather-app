import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import WeatherSymbol from "./components/WeatherSymbol";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => (
  <>
    <Header />

    <MainContent center>
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
            <Box>
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
            </Box>
            <Paper square className="paper"></Paper>
          </Grid>
        </Grid>
      </Container>
    </MainContent>
  </>
);

export default App;
