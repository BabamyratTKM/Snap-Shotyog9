import { Route, Routes as RouteWrapper } from "react-router-dom";

import Mountain from "./mountain/index";
import Beaches from "./beaches/index";
import Birds from "./birds/index";
import Food from "./food/index";
import MainPage from "./index";
import { Component } from "react";
// import SearchPhoto from "./searchPhoto/searchPhoto";
class Routes extends Component {
  render() {
    return (
      <RouteWrapper>
        <Route path="/" element={<MainPage />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/food" element={<Food />} />
      </RouteWrapper>
    );
  }
  // <Route path="/search" element={<SearchPhoto />} />
}
export default Routes;
