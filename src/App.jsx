import "./App.css";

import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Snapshot from "./components/Snapshot";
import Mountain from "./pages/mountain";
import Beaches from "./pages/beaches";
import Birds from "./pages/birds";
import Food from "./pages/food";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Snapshot />
            <Routes>
              <Route path="/" element={<Mountain />} />
              <Route path="/beaches" element={<Beaches />} />
              <Route path="/birds" element={<Birds />} />
              <Route path="/food" element={<Food />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}
export default App;

