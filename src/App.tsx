import "./App.css";
import UsersPage from "./components/UserPage/UsersPage";
import background from "./assets/background1.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <UsersPage />
    </div>
  );
}

export default App;
