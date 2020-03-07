import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchCityPage from "./pages/SearchCityPage";
import WeatherForecastPage from "./pages/WeatherForecastPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SearchCityPage} />
      <Route
        path="/weather-forecast/:latitude/:longitude"
        component={WeatherForecastPage}
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
