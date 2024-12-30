import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/")}>
            View Store
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
