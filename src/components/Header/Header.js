import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";

import "./Header.scss";

const Header = () => (
  <AppBar className="Header" position="static">
    <Toolbar>
      <WbSunny className="main-icon" />
      <Typography variant="h5">Weather app</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
