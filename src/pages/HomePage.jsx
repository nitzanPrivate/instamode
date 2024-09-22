import React from 'react';
import { SideNav } from '../cmps/SideNav'; 
import { TopBar } from '../cmps/TopBar'; 
import { PostsList } from '../cmps/PostsList'; 

export function HomePage() {
    return (
        <section className="home-page">
            <div className="main-layout">
                <SideNav />
                <div className="posts-section">
                    <TopBar />
                    <PostsList />
                </div>
            </div>
        </section>
    );
}
