import React from 'react'
import { Routes, Route } from 'react-router'
import { Login } from './pages/Login.jsx'

export function RootCmp() {
    return (
        <div>
            <main>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                </Routes>
            </main>
        </div>
    )
}
