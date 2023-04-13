import React, { useState, useEffect } from 'react';
import { Post, getPostsByUserId } from '../../api/service/post';

interface Props {
    userId: number;
}

export function PostList({ userId }: Props) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPostsByUserId(userId).then(setPosts);
    }, [userId]);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
