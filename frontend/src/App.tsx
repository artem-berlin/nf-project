import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/LoginPage";
import AuthProvider from "./auth/AuthProvider";
import LandingPage from "./pages/LandingPage";




function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path={'/'} element={<LandingPage/>}/>
                        <Route path={'/main'} element={<MainPage/>}/>
                        <Route path={'/login'} element={<LoginPage/>}/>
                        <Route path={'/register'} element={<RegisterPage/>}/>
                        <Route path={'/:productId'} element={<DetailsPage/>}/>
                        <Route path={'/shoppingcart'} element={<DetailsPage/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
