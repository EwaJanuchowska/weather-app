import React from "react";

import "./MainContent.scss";

const MainContent = ({ children, center }) => (
  <main className={`MainContent${center && " center"}`}>{children}</main>
);

export default MainContent;
