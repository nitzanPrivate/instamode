import React from 'react';
import { SideNav } from '../cmps/SideNav'; 
import { StoryTopBar } from '../cmps/StoryTopBar'; 
import { PostsList} from '../cmps/PostsList';
import { mockPosts } from '../mockData/mockPosts.js'; // Ensure this path is correct

export function MainPage() {
    return (
        <section className="main-page">
            <SideNav />
            <div className="posts-section">
                <StoryTopBar />
                {mockPosts.map(post => (
                    <PostsList key={post._id} post={post} /> // Render each post
                ))}
            </div>
        </section>
    );
}
