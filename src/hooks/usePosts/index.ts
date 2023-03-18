import { useEffect, useState } from "react"
import { getPosts } from "../../api";
import { Post, Response } from "../../types";

export const usePosts = () => {
    const [posts, setPosts] = useState<Response<Post[]>>();
    const [isPending, setIsPending] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setIsPending(true);
            const posts = await getPosts();
            setIsPending(false);
            setPosts(posts)
        })()

    }, [])

    return { posts, isPending }

}