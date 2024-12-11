import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { mockPosts } from '../mockData/mockPosts';

export function ProfilePage() {
    const loggedInUser = useSelector((storeState) => storeState.userModule.user);
    const [activeTab, setActiveTab] = useState('Posts');

    if (!loggedInUser) return null;

    const userPosts = mockPosts.filter(post => post.by._id === loggedInUser._id);

    return (
        <section className="profile-page">
            {/* Upper Section: User Icon and Stats */}
            <section className="profile-header">
                <div className="profile-picture">
                    <img
                        src={loggedInUser.imgUrl}
                        alt={`${loggedInUser.username} profile`}
                        className="profile-img"
                    />
                </div>
                <div className="profile-info">
                    <h2 className="username">{loggedInUser.username}</h2>
                    <div className="profile-stats">
                        <span><strong>{userPosts.length}</strong> posts</span>
                        <span><strong>0</strong> followers</span>
                        <span><strong>0</strong> following</span>
                    </div>
                </div>
            </section>

            {/* Divider Line */}
            <hr className="divider-line" />

            {/* Middle Section: Tabs */}
            <section className="profile-tabs">
                <ul>
                    <li
                        className={activeTab === 'Posts' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('Posts')}
                    >
                        Posts
                    </li>
                    <li
                        className={activeTab === 'Saved' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('Saved')}
                    >
                        Saved
                    </li>
                    <li
                        className={activeTab === 'Tagged' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('Tagged')}
                    >
                        Tagged
                    </li>
                </ul>
            </section>

            {/* Bottom Section: Content */}
            <section className="profile-content">
                {activeTab === 'Posts' && (
                    <div className="posts-grid">
                        {userPosts.length > 0 ? (
                            userPosts.map(post => (
                                <div key={post._id} className="post-item">
                                    <img
                                        src={post.imgUrl}
                                        alt={post.txt}
                                        className="post-img"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No posts yet.</p>
                        )}
                    </div>
                )}
                {activeTab === 'Saved' && (
                    <div className="posts-grid">
                        <p>No saved posts yet.</p>
                    </div>
                )}
                {activeTab === 'Tagged' && (
                    <div className="posts-grid">
                        <p>No tagged posts yet.</p>
                    </div>
                )}
            </section>
        </section>
    );
}
