import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#f5f5ef] text-black">
      <div className="flex items-center justify-between px-10 py-6">
        <div
        className="font-bold tracking-tight"
        style={{ fontSize: "1.2rem", fontFamily: "Kinta, sans-serif" }}
        >
        MKG Digital Management
        </div>        
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
}
