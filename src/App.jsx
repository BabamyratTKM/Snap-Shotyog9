import "./App.css";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./pages/routes.jsx";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              
              <Routes />
            </div>
            <span className="fork">
              <a href="https://github.com/">Fork me on GitHub</a>
            </span>
          </div>
        </BrowserRouter>
      </StrictMode>
    );
  }
}
export default App;
