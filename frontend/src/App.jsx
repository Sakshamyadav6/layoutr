import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/uilibrary" element={<Library />} />
        <Route path="account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/builder/:id?" element={<Builder />} />
      </Routes>
    </>
  );
}

export default App;
