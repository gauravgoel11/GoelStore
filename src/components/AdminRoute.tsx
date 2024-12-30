import { Navigate } from "react-router-dom";
import { useStore } from "@/lib/store";

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useStore();

  if (!user?.user_metadata?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};
