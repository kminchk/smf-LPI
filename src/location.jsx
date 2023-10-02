import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";

export default function MiniDrawer() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const getPageTitle = () => {
      switch (location.pathname) {
        case "/":
          return "Smart LPI";
        case "/page/rlsb-r2-36-62":
          return "RLSB-R2-36-62";
        case "/page/rlse-alingment":
          return "RLSE-Alingment";
        case "/page/rlse-cycle-time":
          return "RLSE-Cycle-Time";
        case "/page/lrphp":
          return "LRPHP#";
        case "/page/les-di-af-focus":
          return "LES-DI-AF-Focus";
        case "/page/les-no-exp":
          return "LES-NO EXP";
        case "/page/screen-tension":
          return "Screen Tension";
        default:
          return "";
      }
    };

    const title = getPageTitle();
    setPageTitle(title);
  }, [location.pathname]);

  return (
    <>
      <Typography variant="h6" noWrap component="div">
        {pageTitle}
      </Typography>
    </>
  );
}
