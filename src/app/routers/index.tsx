import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard, CadastrarEvento } from "../pages";


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Dashboard />} />
                <Route path="/cadastrarevento"  element={<CadastrarEvento />} />


                <Route path="*"  element={<Navigate to="/" replace />} /> 
            </Routes>
        </BrowserRouter>
    )
}