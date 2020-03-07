import React from "react";
import { Typography } from "@material-ui/core";

const ErrorBox = ({ children }) => (
  <div className="ErrorBox">
    <Typography variant="h4" color="error">{children}</Typography>
  </div>
);

export default ErrorBox;
