import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPages } from "../pages/LandingPages";

export const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPages />} />
        </Routes>
      </Router>
    </> 
  );
};
