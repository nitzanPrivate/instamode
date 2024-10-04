import React, { useState } from 'react';
import LikeIcon from '../assets/svg/likeIcon.svg?react'; 
import UnlikeIcon from '../assets/svg/unlikeIcon.svg?react'; 
import CommentIcon from '../assets/svg/commentIcon.svg?react'; 
import ShareIcon from '../assets/svg/shareIcon.svg?react';
import SaveIcon from '../assets/svg/saveIcon.svg?react'; 

export function PostsList({ post }) {
    const [isLiked, setIsLiked] = useState(post.likedBy.some(user => user._id === "u101")); // Check if the user has already liked the post
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
                by: {
                    _id: "u101", // Placeholder for user id
                    fullname: "user1", // Placeholder for user name
                    imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego8_ttcv9g.jpg"
                },
                txt: comment,
            };
            setComments([...comments, newComment]);
            setComment('');
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
            {totalLikes > 0 && ( // Only show likes count if greater than 0
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
