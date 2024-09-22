import React from 'react'
import { Routes, Route } from 'react-router'
import { Login } from './pages/Login.jsx'
import { HomePage } from './pages/HomePage';

export function RootCmp() {
    return (
        <div>
            <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/instamode" element={<Login />} />
                </Routes>
            </main>
        </div>
    )
}
