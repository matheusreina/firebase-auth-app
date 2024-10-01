import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Principal from "./pages/Principal";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
