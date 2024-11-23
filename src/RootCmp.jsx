import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { MainPage } from './pages/MainPage.jsx';

export function RootCmp() {
    console.log("Current Path:", window.location.pathname); 

    return (
        <div>
            <main>
                <Routes>
                    <Route path="/instamode/login" element={<Login />} />
                    <Route path="/instamode/homepage" element={<MainPage />} /> 
                    <Route path="/" element={<Navigate to="/instamode/login" />} /> 
                    <Route path="*" element={<Navigate to="/instamode/login" />} /> {/* Catch-all redirect to login */}
                </Routes>
            </main>
        </div>
    );
}