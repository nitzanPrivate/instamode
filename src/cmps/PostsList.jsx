import React, { useState } from 'react';

export function PostsList({ post }) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(post.comments || []);
    const [isCommentInputVisible, setIsCommentInputVisible] = useState(false); // State for showing/hiding comment input

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            const newComment = {
                id: `c${Date.now()}`, // Generate a unique id for the comment
                by: {
                    _id: "u101", // Replace this with the logged-in user id
                    fullname: "user1", // Replace with the logged-in user name
                    imgUrl: "https://res.cloudinary.com/dyg4ekmzg/image/upload/v1727618385/lego8_ttcv9g.jpg" // Replace with the logged-in user image
                },
                txt: comment,
            };
            setComments([...comments, newComment]);
            setComment('');
            setIsCommentInputVisible(false); // Hide input after submission
        }
    };

    return (
        <div className="post">
            <div className="post-header">
                <img src={post.by.imgUrl} alt={post.by.fullname} className="profile-icon" />
                <span className="username">{post.by.fullname}</span>
            </div>
            <img src={post.imgUrl} alt={post.txt} className="post-image" />
            <div className="post-actions">
                <button>Like</button>
                <button onClick={() => setIsCommentInputVisible(true)}> {/* Show input on click */}
                    Comment
                </button>
                <button>Share</button>
                <button>Save</button>
            </div>
            <div className="likes-count">{post.likedBy.length} likes</div>
            {isCommentInputVisible && ( // Conditionally render the comment input
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
