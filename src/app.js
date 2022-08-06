import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import PageSignIn from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signin" element={<PageSignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
