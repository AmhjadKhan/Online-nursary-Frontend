import { Outlet } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
