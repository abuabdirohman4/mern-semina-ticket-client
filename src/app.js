import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import PageSignIn from "./pages/signin";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Home</>} />
                <Route path="/signin" element={<PageSignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
