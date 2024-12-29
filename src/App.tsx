import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/index";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomePage />
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

export default App;
