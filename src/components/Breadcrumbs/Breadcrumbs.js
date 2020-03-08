import React from "react";
import { Breadcrumbs as MateralBreadcrumbs } from "@material-ui/core";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ children }) => (
  <MateralBreadcrumbs className="Breadcrumbs" aria-label="nawigacja">
    {children}
  </MateralBreadcrumbs>
);

export default Breadcrumbs;
