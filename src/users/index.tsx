import React, { useEffect, useState } from 'react';
import TableHead from './tableHead';
import UserInfo from './userInfo';
import UserPostsInfo from './userPostsInfo';

const Users = () => {
    const [toggleIndex, setToggleIndex] = useState<null | number>(null);
    const [users, setUsers] = useState<{ id: number, name: string, email: string, website: string }[]>([]);
    const [userPosts, setUserPosts] = useState<{ id: number, body: string, title: string, userId: number }[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const showUserPosts = (id: number) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(res => res.json())
            .then(data => {
                setUserPosts(data);
            });
    }

    const toggleUserPosts = (index: number, id: number) => {
        if (toggleIndex === index) {
            setToggleIndex(null);
        } else {
            setToggleIndex(index);
            showUserPosts(id);
        }
    }

    return (
        <div className="table">
            <div>
                <TableHead />
                <div style={{ "maxHeight": "500px", "overflow": "scroll" }}>
                    {users.map((user, index) => {
                        return (
                            <React.Fragment key={user.id}>
                                <UserInfo
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    website={user.website}
                                    index={index}
                                    toggleUserPosts={toggleUserPosts}
                                />
                                {toggleIndex === index && (
                                    <div className="table">
                                        <UserPostsInfo userPosts={userPosts} />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Users;
