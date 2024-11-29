import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SideNav } from '../cmps/SideNav';
import { ImageGallery } from '../cmps/ImageGallery.jsx';
import { mockPosts } from '../mockData/mockPosts.js';


export function ExplorePage() {
    const loggedInUser = useSelector(storeState => storeState.userModule.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser) navigate('/instamode/login');
    }, [loggedInUser, navigate]);

    if (!loggedInUser) return null;

    return (
        <section className="explore-page">
            <SideNav />
            <div className="gallery-section">
                <ImageGallery posts={mockPosts} />
            </div>
        </section>
    );
}
