import { Routes, Route, Navigate } from "react-router-dom";

import { DcPages, MarvelPage } from "../heroes";
import { LoginPages } from "../auth";
import { Navbar } from "../ui/components/Navbar";

export const AppRouter = () => {
    return (
        <>
        <Navbar />

        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPages />} />

            <Route path="login" element={<LoginPages />} />

            <Route path="/" element={<Navigate to="/marvel" />}  />
        </Routes>
        
        </>
    )
}
