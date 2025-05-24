import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import SchedulePage from "../pages/SchedulePage";
import PatientDetailsPage from "../pages/PatientDetailsPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/patient/:id" element={<PatientDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
