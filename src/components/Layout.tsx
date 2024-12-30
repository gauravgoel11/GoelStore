import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./Header";

const Layout = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Outlet />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
