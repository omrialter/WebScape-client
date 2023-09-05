import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/general/Header"
import AuthUser from "../components/general/AuthUser"
import HeaderAdmin from "../components/admin/HeaderAdmin";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";



const AppRouters: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<HeaderAdmin />} />
                <Route path="/*" element={<Header />} />
            </Routes>

            <Routes>
                <Route path="/*" element={<AuthUser />} />
            </Routes>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/:user_name" element={<Profile />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>

        </BrowserRouter>
    );
};

export default AppRouters;
