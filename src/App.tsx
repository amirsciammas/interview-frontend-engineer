import { Route, Routes } from "react-router-dom";
import "./App.scss";
import background from "./assets/background1.jpg";
import PostPage from "./components/PostPage/PostPage";
import UsersPage from "./components/UserPage/UsersPage";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Routes>
        <Route path="users" element={<UsersPage />} />
        <Route path="/" element={<UsersPage />} />
        <Route path="users/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
