import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TopResOrderFood from "./Components/TopResOrderFood.jsx";
import Search from "./Components/Search.jsx";
import Offers from "./Components/Offers.jsx";
import HelpAndSuppprt from "./Components/HelpAndSuppprt.jsx";
import Cart from "./Components/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/TopResOrderFood" element={<TopResOrderFood />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/HelpSupport" element={<HelpAndSuppprt />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </StrictMode>
);
