import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts, TpostsProps } from "../../Services/posts";
import { DataStore } from "../../StoreProvider/provider";
import "./index.css";

type TPropsPosts = {};

export const Posts = (props: TPropsPosts) => {

    const { data, dispatch } = useContext(DataStore);
    const { userid } = useParams();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (data.posts.length === 0) {
            setLoader(true);
            getPosts().then(result => {
                setLoader(false);
                dispatch({
                    type: "SET_POSTS",
                    data: result,
                })
            })
        }
    }, [])

    const userPosts = userid ? data.posts.filter(val => val.userId.toString() === userid) : [];

    return <div className="container">
        {loader ? "Loading..." :
            <div>
                <h2>POSTS of ID {userid}</h2>
                {userPosts.length > 0 ? userPosts.map((val: TpostsProps) => (
                    <div className="posts">
                        <h4>{val.title}</h4>
                        <div>{val.body}</div>
                    </div>
                )) : <div>No data exist for this userID</div>}
            </div>
        }
    </div>
}