import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}