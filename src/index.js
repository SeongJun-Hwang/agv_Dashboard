import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components"

const lightmode = {
  backgroundColor: "whitesmoke",
  color: "#111",
}

const darkmode = {
  backgroundColor: "#111",
  color: "whitesmoke",
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkmode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
