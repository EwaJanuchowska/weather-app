import React, { useEffect } from "react";
import { Grid, Container, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";
import LocationSelect from "../../components/LocationSelect";

let geocoderService = null;

const SearchCityPage = () => {
  const history = useHistory();
  useEffect(() => {
    if (!geocoderService && window.google) {
      geocoderService = new window.google.maps.Geocoder();
    }
  }, []);

  return (
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
                Wpisz nazwę miasta/regionu
              </Box>

              <LocationSelect
                onChange={(event, value) => {
                  if (geocoderService) {
                    geocoderService.geocode(
                      {
                        placeId: value.place_id
                      },
                      (responses, status) => {
                        if (status === "OK") {
                          const lat = responses[0].geometry.location.lat();
                          const lng = responses[0].geometry.location.lng();

                          history.push(`/weather-forecast/${lat}/${lng}`);
                        }
                      }
                    );
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </MainContent>

      <Footer />
    </>
  );
};

export default SearchCityPage;
