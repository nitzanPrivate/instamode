import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { HomePage } from './pages/HomePage';


export function RootCmp() {
    console.log("Current Path:", window.location.pathname); // Log the current path
    return (
        <div>
            <main>
                <Routes>
                    <Route path="/instamode/login" element={<Login />} />
                    <Route path="/instamode/homepage" element={<HomePage />} />
                    <Route path="/" element={<Navigate to="/instamode/login" />} /> {/* Redirect root to login */}
                    <Route path="*" element={<Navigate to="/instamode/login" />} /> {/* Catch-all redirect to login */}
                </Routes>
            </main>
        </div>
    );
}