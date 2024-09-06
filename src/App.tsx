import { Outlet } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
