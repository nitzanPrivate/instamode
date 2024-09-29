import React from 'react';
import { SideNav } from '../cmps/SideNav'; 
import { StoryTopBar } from '../cmps/StoryTopBar'; 
import { PostsList } from '../cmps/PostsList'; 

export function MainPage() {
    return (
        <section className="main-page">
            <SideNav />
            <div className="posts-section">
                <StoryTopBar />
                <PostsList />
            </div>
        </section>
    );
}
