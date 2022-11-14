import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/logement/:lodgingId" element={<Lodging />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
