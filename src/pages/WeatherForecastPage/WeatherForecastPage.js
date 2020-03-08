import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Box,
  CircularProgress,
  Link,
  Typography
} from "@material-ui/core";
import { useParams, Link as RouterLink } from "react-router-dom";
import WeatherInfoTile from "../../components/WeatherInfoTile";
import CurrentWeatherInfoTile from "../../components/CurrentWeatherInfoTile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";
import ErrorBox from "../../components/ErrorBox";
import Breadcrumbs from "../../components/Breadcrumbs";

import "./WeatherForecastPage.scss";

let geocoderService = null;

const WeatherForecastPage = () => {
  const { latitude, longitude, placeId } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [region, setRegion] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!geocoderService && window.google) {
      geocoderService = new window.google.maps.Geocoder();
    }

    if (geocoderService) {
      geocoderService.geocode(
        {
          placeId
        },
        (responses, status) => {
          if (status === "OK") {
            setRegion(responses[0].formatted_address);
          }
        }
      );
    }
  }, [placeId]);

  useEffect(() => {
    fetch(`/${process.env.REACT_APP_DARKSKY_KEY}/${latitude},${longitude}`)
      .then(response => {
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

      <MainContent className="WeatherForecastPage">
        <Breadcrumbs aria-label="nawigacja">
          <Link component={RouterLink} to="/">
            Strona główna
          </Link>
          <Typography color="textPrimary">Prognoza - dni</Typography>
        </Breadcrumbs>

        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box
                textAlign="center"
                fontSize="h5.fontSize"
                fontFamily="h6.fontFamily"
                lineHeight={2}
              >
                Aktualna prognoza: {region}
              </Box>

              <Box display="flex" justifyContent="center">
                <CurrentWeatherInfoTile
                  weatherType={forecastData.currently.icon}
                  temperature={forecastData.currently.temperature}
                  precipProbability={forecastData.currently.precipProbability}
                  humidity={forecastData.currently.humidity}
                  windSpeed={forecastData.currently.windSpeed}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                textAlign="center"
                fontSize="h5.fontSize"
                fontFamily="h6.fontFamily"
                lineHeight={2}
              >
                Prognoza na najbliższe dni
              </Box>

              <Box className="forecast-tiles">
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
