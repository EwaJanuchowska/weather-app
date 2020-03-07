import React, { useState, useEffect } from "react";
import { Grid, Container, Box, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import WeatherInfoTile from "../../components/WeatherInfoTile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";
import ErrorBox from "../../components/ErrorBox";

const WeatherForecastPage = () => {
  const { latitude, longitude } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/${process.env.REACT_APP_DARKSKY_KEY}/${latitude},${longitude}`)
      .then(response => {
        console.log("res", response);
        if (response.status !== 200) {
          setError(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setForecastData(data);
      })
      .finally(() => setIsLoading(false));
  }, [latitude, longitude]);

  if (isLoading) {
    return (
      <>
        <Header />
        <MainContent center>
          <CircularProgress />
        </MainContent>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <MainContent center>
          <ErrorBox>Error {error}</ErrorBox>
        </MainContent>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <MainContent>
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
      </MainContent>

      <Footer />
    </>
  );
};

export default WeatherForecastPage;
