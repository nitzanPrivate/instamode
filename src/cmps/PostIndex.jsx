import React from "react";
import { PostList } from "./PostList";
import { mockPosts } from "../mockData/mockPosts";

export function PostIndex() {
    return (
        <section className="post-index">
            {mockPosts.map((post) => (
                <div key={post._id} className="post-container">
                    <PostList post={post} />
                </div>
            ))}
        </section>
    );
}
