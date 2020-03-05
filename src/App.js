import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import WeatherInfoTile from "./components/WeatherInfoTile";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
              <WeatherInfoTile weatherType="hot" />
              <WeatherInfoTile weatherType="clear" />
              <WeatherInfoTile weatherType="partlyCloudy" />
              <WeatherInfoTile weatherType="windy" />
              <WeatherInfoTile weatherType="snow" />
              <WeatherInfoTile weatherType="cloudy" />
              <WeatherInfoTile weatherType="scatteredSnow" />
              <WeatherInfoTile weatherType="thunderstorms" />
              <WeatherInfoTile weatherType="thunderstormsWithRain" />
              <WeatherInfoTile weatherType="showers" />
              <WeatherInfoTile weatherType="drizzle" />
              <WeatherInfoTile weatherType="rainWithSun" />
            </Box>
            <Paper square className="paper"></Paper>
          </Grid>
        </Grid>
      </Container>
    </MainContent>

    <Footer />
  </>
);

export default App;
