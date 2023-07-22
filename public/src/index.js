import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
//fonts
import "./assets/fonts/vazir-font/Vazir-Bold.woff"
import "./assets/fonts/vazir-font/Vazir-Light.woff"
import "./assets/fonts/vazir-font/Vazir-Medium.woff"
import "./assets/fonts/vazir-font/Vazir.woff"


ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="572748207594-cosdlmqptn36ceovaq1uak91tmp7oi93.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
