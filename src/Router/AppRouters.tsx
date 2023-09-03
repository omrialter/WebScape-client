import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/general/Header"
import HeaderAdmin from "../components/admin/HeaderAdmin";
import Profile from "../pages/Profile";
import Home from "../pages/Home";






const AppRouters: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<HeaderAdmin />} />
                <Route path="/*" element={<Header />} />
            </Routes>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </BrowserRouter>
    );
};

export default AppRouters;
