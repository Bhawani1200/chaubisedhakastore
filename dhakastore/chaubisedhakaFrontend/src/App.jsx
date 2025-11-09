import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
