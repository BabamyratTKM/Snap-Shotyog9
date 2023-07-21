import Mountain from "./mountain/index";
import Beaches from "./beaches/index";
import Birds from "./birds/index";
import Food from "./food/index";
import { Route, Routes, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mountain" />} />
      <Route path="/mountain" element={<Mountain />} />
      <Route path="/beaches" element={<Beaches />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/food" element={<Food />} />
    </Routes>
  );
};
export default Main;
