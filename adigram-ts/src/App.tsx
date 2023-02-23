import { Context } from "./contextAPI/Context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material/Container";
import UserList from "./components/Users/UserList";
import "./App.css";

function App() {
  return (
    <Context>
      <Header />
      <Container className="main-container" data-testid="main-container">
        <UserList />
      </Container>
      <Footer />
    </Context>
  );
}

export default App;
