import React from "react";
import ReactDOM from "react-dom";
import App from "./scripts/App";
import "./scripts/firebase/config";

// Importing styles
import "./styles/fonts.css";
import "./styles/spacing.css";
import "./styles/text.scss";
import "./styles/main.scss";
import "./styles/responsive.css";

ReactDOM.render(<App />, document.getElementById("root"));
