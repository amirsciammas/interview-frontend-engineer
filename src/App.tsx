import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { UserList } from './components/user/user';
import { PostList } from './components/post/post';

function App() {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const handleUserClick = (userId: number) => {
        setSelectedUserId(userId);
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<UserList onUserClick={handleUserClick} />} />
                    <Route path="/posts/:userId" element={<PostList userId={selectedUserId ?? 0} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
