import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/general/Header"
import HeaderAdmin from "./components/admin/HeaderAdmin";






const AppRouters: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<HeaderAdmin />} />
                <Route path="/*" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;
