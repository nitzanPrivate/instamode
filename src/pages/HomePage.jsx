import React from 'react';
import { SideNav } from '../cmps/SideNav'; 
import { TopBar } from '../cmps/TopBar'; 
import { PostsList } from '../cmps/PostsList'; 
import { ImgUploader} from '../cmps/ImgUploader';

export function HomePage() {
    const handleImageUpload = (url) => {
        console.log('Image uploaded successfully:', url);
    };
    return (
        <section className="home-page">
            <div className="main-layout">
                <SideNav />
                <div className="posts-section">
                    <TopBar />
                    <PostsList />
                    <ImgUploader onUploaded={handleImageUpload} />
                </div>
            </div>
        </section>
    );
}
