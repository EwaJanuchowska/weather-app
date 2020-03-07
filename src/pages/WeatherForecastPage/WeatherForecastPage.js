import React, { useState, useEffect } from "react";
import { Grid, Container, Box, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import WeatherInfoTile from "../../components/WeatherInfoTile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";

const WeatherForecastPage = () => {
  const { latitude, longitude } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/${latitude},${longitude}`)
      .then(response => response.json())
      .then(data => setForecastData(data))
      .finally(() => setIsLoading(false));
  }, [latitude, longitude]);

  console.log("forecastData", forecastData);

  return (
    <>
      <Header />

      <MainContent center={isLoading || !forecastData}>
        {isLoading || !forecastData ? (
          <CircularProgress />
        ) : (
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  textAlign="center"
                  fontSize="h5.fontSize"
                  fontFamily="h6.fontFamily"
                  lineHeight={2}
                >
                  Forecast for the next few days
                </Box>

                <Box style={{ display: "flex", flexWrap: "wrap" }}>
                  {forecastData.daily.data.map((item, index) => (
                    <WeatherInfoTile
                      key={index}
                      weatherType={item.icon}
                      temperatureDay={item.temperatureHigh}
                      temperatureNight={item.temperatureLow}
                      precipProbability={item.precipProbability}
                      humidity={item.humidity}
                      windSpeed={item.windSpeed}
                      date={item.time}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
      </MainContent>

      <Footer />
    </>
  );
};

export default WeatherForecastPage;
