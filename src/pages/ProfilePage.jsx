import React from 'react';
import { useParams } from 'react-router-dom';
import { SideNav } from '../cmps/SideNav';

export function ProfilePage() {
    const { username } = useParams();

    return (
        <div className="profile-page">
            <SideNav />
            <div className="content">
                <h2>Profile Page for {username}</h2>
            </div>
        </div>
    );
}
