import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { SearchPage } from './pages/SearchPage.jsx';
import { ExplorePage } from './pages/ExplorePage.jsx';
import { MessagesPage } from './pages/MessagesPage.jsx';
import { NotificationsPage } from './pages/NotificationsPage.jsx';
import { CreatePage } from './pages/CreatePage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';

export function RootCmp() {
    console.log("Current Path:", window.location.pathname);

    return (
        <div>
            <main>
                <Routes>
                    <Route path="/instamode/login" element={<Login />} />
                    <Route path="/instamode/homepage" element={<MainPage />} />
                    <Route path="/instamode/search" element={<SearchPage />} />
                    <Route path="/instamode/explore" element={<ExplorePage />} />
                    {/* <Route path="/instamode/reels" element={<ReelsPage />} /> */}
                    <Route path="/instamode/messages" element={<MessagesPage />} />
                    <Route path="/instamode/notifications" element={<NotificationsPage />} />
                    <Route path="/instamode/create" element={<CreatePage />} />
                    <Route path="/instamode/settings" element={<SettingsPage />} />
                    <Route path="/instamode/:username" element={<ProfilePage />} />
                    <Route path="/" element={<Navigate to="/instamode/login" />} />
                    <Route path="*" element={<Navigate to="/instamode/login" />} /> {/* Catch-all redirect to login */}
                </Routes>
            </main>
        </div>
    );
}
