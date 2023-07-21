import "./App.css";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Snapshot from "./components/Snapshot";
import Main from "./pages/main.jsx";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Snapshot />
            <Main />
          </div>
          <span className="fork">
            <a href="https://github.com/">Fork me on GitHub</a>
          </span>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}
export default App;
