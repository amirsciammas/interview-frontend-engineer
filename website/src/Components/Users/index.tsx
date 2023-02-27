import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../Services/posts";
import { getUsers, TUsersResponse } from "../../Services/users";
import { DataStore } from "../../StoreProvider/provider";
import "./index.css";

type TPropsUsers = {};

export const Users = (props: TPropsUsers) => {

    const { data, dispatch } = useContext(DataStore);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if(data.users.length === 0){
            setLoader(true);
            getUsers().then(result => {
                setLoader(false);
                dispatch({
                    type: "SET_USERS",
                    data: result,
                })
            })
        }
    }, []);

    return <div>{loader ? "Loading..." :
        <>
            <h2>Users List</h2>
            <div className="users">
                {data.users.map((val: TUsersResponse) => <div className="user-card" onClick={() => navigate("/posts/" + val.id)}>
                    <div>Name: <h3 className="block-inline">{val.name}</h3></div>
                    <div>Email: <h5 className="block-inline">{val.email}</h5></div>
                </div>)}
            </div>
        </>
    }
    </div>
}