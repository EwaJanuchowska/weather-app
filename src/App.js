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
            <Box style={{ display: "flex", flexWrap: "wrap" }}>
              <WeatherInfoTile
                weatherType="hot"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1509944400}
              />
              <WeatherInfoTile
                weatherType="clear"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="partlyCloudy"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="windy"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="snow"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="cloudy"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="scatteredSnow"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="thunderstorms"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="thunderstormsWithRain"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="showers"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="drizzle"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
              <WeatherInfoTile
                weatherType="rainWithSun"
                temperatureDay={23}
                temperatureNight={7}
                precipProbability={30}
                humidity={30}
                windSpeed={12}
                date={1583448957542}
              />
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
