import React from 'react';
import { useNavigate } from 'react-router-dom';
import LikeIcon from '../assets/svg/likeIcon.svg?react';
import CommentIcon from '../assets/svg/commentIcon.svg?react';

export function ImageGallery({ posts }) {
    const navigate = useNavigate();

    return (
        <div className="image-gallery">
            {posts.map(post => (
                <div
                    key={post._id}
                    className="gallery-item"
                    onClick={() => navigate(`/instamode/post/${post._id}`)}
                >
                    <img src={post.imgUrl} alt="Post" />
                    <div className="hover-overlay">
                        <span>
                            <LikeIcon />
                            {post.likedBy.length}
                        </span>
                        <span>
                            <CommentIcon />
                            {post.comments.length}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
