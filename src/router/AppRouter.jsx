import { Routes, Route } from "react-router-dom";

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>

        <Routes>

            <Route path="/login" element={
                <PublicRoute>
                    <LoginPages />
                </PublicRoute>
                } 
            />

            <Route path="*" element={
                <PrivateRoute>
                    <HeroesRoutes />
                </PrivateRoute>
            } />

        </Routes>
        
        </>
    )
}
