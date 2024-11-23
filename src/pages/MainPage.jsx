import React, { useEffect } from 'react';
import { SideNav } from '../cmps/SideNav';
import { StoryTopBar } from '../cmps/StoryTopBar';
import { PostsList } from '../cmps/PostsList';
import { mockPosts } from '../mockData/mockPosts.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
    const loggedInUser = useSelector(storeState => storeState.userModule.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser) navigate('/instamode/login');
    }, [loggedInUser, navigate]);

    if (!loggedInUser) return null;

    return (
        <section className="main-page">
            <SideNav />
            <div className="posts-section">
                <StoryTopBar />
                {mockPosts.map(post => (
                    <PostsList key={post._id} post={post} />
                ))}
            </div>
        </section>
    );
}