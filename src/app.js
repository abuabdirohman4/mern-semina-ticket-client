import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignInPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import CategoriesPage from "./pages/categories";
import CategoriesCreate from "./pages/categories/create";
import CategoriesEdit from "./pages/categories/edit";
import { listen } from "./redux/listener";

function App() {
  useEffect(() => {
    listen()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<PageSignInPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/create" element={<CategoriesCreate />} />
        <Route path="/categories/edit/:id" element={<CategoriesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
