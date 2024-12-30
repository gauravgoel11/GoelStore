import { Navigate } from "react-router-dom";
import { useStore } from "@/lib/store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
