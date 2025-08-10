import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
