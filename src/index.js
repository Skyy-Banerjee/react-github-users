import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
//Domain: dev-ojrp36y61wxf43cp.us.auth0.com
//Client ID: a62jO08SoYi7jWf0GiW09Z6wYTeK87YN
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ojrp36y61wxf43cp.us.auth0.com"
      clientId="a62jO08SoYi7jWf0GiW09Z6wYTeK87YN"
      // authorizationParams={{
      //   redirect_uri: window.location.origin
      // }}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
      >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
