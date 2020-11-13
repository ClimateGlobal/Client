import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing bootstrap css
import { HashRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top";

// Importing the Pages
import HomeApp from "../pages/home-page";
import MapApp from "../pages/map-page";
import MapsApp from "../pages/maps-page";
import ContactApp from "../pages/contact";
import NotFound404App from "../pages/not-found-404-page";

function App() {
  return (
    <HashRouter basename="/ClimateGlobal/">
      <ScrollToTop />
      <Switch>
        <Route path={["/", "/home"]} exact component={HomeApp} />
        <Route path="/map" exact component={MapApp} />
        <Route path="/maps" exact component={MapsApp} />
        <Route path="/contact" exact component={ContactApp} />
        <Route component={NotFound404App} />
      </Switch>
    </HashRouter>
  );
}

export default App;
