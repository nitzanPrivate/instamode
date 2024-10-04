import React, { useState } from 'react';
import LikeIcon from '../assets/svg/likeIcon.svg?react'; 
import UnlikeIcon from '../assets/svg/unlikeIcon.svg?react'; 
import CommentIcon from '../assets/svg/commentIcon.svg?react'; 
import ShareIcon from '../assets/svg/shareIcon.svg?react';
import SaveIcon from '../assets/svg/saveIcon.svg?react'; 
import { mockUsers } from '../mockData/mockUsers'; 

export function PostsList({ post }) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Retrieve the current user from local storage
    const currentUserId = currentUser ? currentUser.user_id : null; // Get the current user ID

    const [isLiked, setIsLiked] = useState(post.likedBy.some(user => user._id === currentUserId)); // Check if the current user has liked the post
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(post.comments || []);
    const [isCommentInputVisible, setIsCommentInputVisible] = useState(false); 

    const handleLike = () => {
        setIsLiked(prev => !prev);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            const newComment = {
                id: `c${Date.now()}`,
                by: getUserById(currentUserId, mockUsers), // Fetch user details using the ID
                txt: comment,
            };
            setComments([...comments, newComment]);
            setComment('');
            setIsCommentInputVisible(false); // Hide input after submission
        }
    };

    const totalLikes = isLiked 
        ? post.likedBy.length + 1  // Add 1 if the current user liked the post
        : post.likedBy.length; // Otherwise, just show the existing likes

    return (
        <div className="post">
            <div className="post-header">
                <img src={post.by.imgUrl} alt={post.by.fullname} className="profile-icon" />
                <span className="username">{post.by.fullname}</span>
            </div>
            <img src={post.imgUrl} alt={post.txt} className="post-image" />
            <div className="post-actions">
                <div className="left-actions">
                    <button onClick={handleLike} className="like-button">
                        {isLiked ? (
                            <UnlikeIcon className="like-icon" style={{ fill: 'red' }} />
                        ) : (
                            <LikeIcon className="like-icon" style={{ fill: 'black' }} />
                        )}
                    </button>
                    <button onClick={() => setIsCommentInputVisible(!isCommentInputVisible)} className="comment-button">
                        <CommentIcon className="comment-icon" />
                    </button>
                    <button className="share-button">
                        <ShareIcon className="share-icon" />
                    </button>
                </div>
                <button className="save-button">
                    <SaveIcon className="save-icon" />
                </button>
            </div>
            {totalLikes > 0 && (
                <div className="likes-count">{totalLikes} {totalLikes === 1 ? 'like' : 'likes'}</div>
            )}
            {isCommentInputVisible && (
                <form onSubmit={handleCommentSubmit}>
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
            <div className="comments">
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <img src={comment.by.imgUrl} alt={comment.by.fullname} className="comment-icon" />
                        <span className="comment-username">{comment.by.fullname}</span>
                        <span className="comment-text">{comment.txt}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Utility function to get user by ID
const getUserById = (userId, users) => {
    const user = users.find(user => user.user_id === userId);
    return user ? { fullname: user.username, imgUrl: user.imgUrl } : { fullname: 'Unknown', imgUrl: '' };
};
