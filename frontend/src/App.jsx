import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthLayout from "./pages/AuthLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/dashboard/Projects";
import Library from "./pages/dashboard/Library";
import Account from "./pages/dashboard/Account";
import Settings from "./pages/dashboard/Settings";
import ProjectDetail from "./components/dashboard/ProjectDetail";
import Builder from "./pages/Builder";
import ProtectedRoute from "./routes/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import Template from "./pages/Template";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Features from "./pages/Features";
import Developer from "./pages/Developer";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/dashboard",
    "/projects",
    "/uilibrary",
    "/account",
    "/settings",
    "/projects",
    "/builder",
  ];
  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {!shouldHideNavbar && <NavBar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/features" element={<Features />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/template" element={<Template />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/uilibrary" element={<Library />} />
          <Route path="account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/builder/:id?" element={<Builder />} />
        </Route>
        {/* fallback  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
