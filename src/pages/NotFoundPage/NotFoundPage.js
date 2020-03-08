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
      <Typography variant="h2" component="h2" gutterBottom>
        404 - strona nie istnieje
      </Typography>
      <Link to="/" component={RouterLink}>
        Powrót na stronę główną
      </Link>
    </MainContent>

    <Footer />
  </>
);

export default NotFoundPage;
