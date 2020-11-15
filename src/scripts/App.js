import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing bootstrap css
import "react-table/react-table.css"; // React-Table css
import { HashRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top";
import PrivateRoute from "./private-route";
import { AuthProvider } from "./firebase/auth";

// Importing the Pages
import HomeApp from "../pages/home-page";
import MapApp from "../pages/map-page";
import MapsApp from "../pages/maps-page";
import ContactApp from "../pages/contact";
import LoginApp from "../pages/login";
import ProfileApp from "../pages/profile";
import InboxApp from "../pages/inbox";
import NotFound404App from "../pages/not-found-404-page";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/ClimateGlobal/">
        <ScrollToTop />
        <Switch>
          <Route path={["/", "/home"]} exact component={HomeApp} />
          <Route path="/map" exact component={MapApp} />
          <Route path="/maps" exact component={MapsApp} />
          <Route path="/contact" exact component={ContactApp} />
          <Route path="/login" exact component={LoginApp} />
          <PrivateRoute path="/profile" exact component={ProfileApp} />
          <PrivateRoute path="/profile/inbox" exact component={InboxApp} />
          <Route component={NotFound404App} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
