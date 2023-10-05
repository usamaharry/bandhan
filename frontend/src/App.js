import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

//local
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
