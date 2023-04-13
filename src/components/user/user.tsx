import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, getUsers } from '../../api/service/user';

interface Props {
    onUserClick: (userId: number) => void;
}

export function UserList(props: Props) {
    const [users, setUsers] = useState<User[]>([]);

    const handleUserClick = (userId: number) => {
        props.onUserClick(userId);
    };

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/posts/${user.id}`} onClick={() => handleUserClick(user.id)}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
