import React from "react";

import "./MainContent.scss";

const MainContent = ({ className = "", children, center }) => (
  <main className={`MainContent${center ? " center" : ""} ${className}`}>
    {children}
  </main>
);

export default MainContent;
