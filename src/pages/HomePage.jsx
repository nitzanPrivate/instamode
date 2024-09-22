import React from 'react';
import { Outlet } from 'react-router';
import { SideNav } from '../cmps/SideNav'; 
import { TopBar } from '../cmps/TopBar'; 
import { PostsList } from '../cmps/PostsList'; 

export function HomePage() {
    return (
        <section className="home-page">
            <SideNav />
            <section className="main-content">
                <TopBar />
                <PostsList />
            </section>
            <Outlet />
        </section>
    );
}