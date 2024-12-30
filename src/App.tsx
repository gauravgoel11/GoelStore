import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import routes from "./routes";

function App() {
  const { setUser } = useStore();
  const element = useRoutes(routes);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return element;
}

export default App;
