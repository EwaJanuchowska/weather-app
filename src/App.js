import React, { useMemo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useMediaQuery, CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SearchCityPage from "./pages/SearchCityPage";
import WeatherForecastPage from "./pages/WeatherForecastPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchCityPage} />
          <Route
            path="/weather-forecast/:placeId/:latitude/:longitude"
            component={WeatherForecastPage}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
