import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";

const SearchCityPage = () => (
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

            <Paper square className="paper"></Paper>
          </Grid>
        </Grid>
      </Container>
    </MainContent>

    <Footer />
  </>
);

export default SearchCityPage;
