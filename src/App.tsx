import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { GlobalStyle } from "./styles";

import Routes from "./routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
