import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";

const NotFoundPage = () => (
  <>
    <Header />

    <MainContent center>
      <Typography variant="h1" component="h2" gutterBottom>
        404 - not found
      </Typography>
      <Link to="/" component={RouterLink}>Go to main page</Link>
    </MainContent>

    <Footer />
  </>
);

export default NotFoundPage;
