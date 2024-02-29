import { Route, Routes } from "react-router-dom";
import DriverStats from "../Pages/DriverStats";
import ManufacturerStats from "../Pages/ManufacturerStats";
import RaceStats from "../Pages/RaceStats";
import Home from "../Pages/Home";
function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raceStats" element={<RaceStats />} />
        <Route path="/driverStats" element={<DriverStats />} />
        <Route path="/manufacturerStats" element={<ManufacturerStats />} />
      </Routes>
    </>
  );
}

export default MainRoute;
