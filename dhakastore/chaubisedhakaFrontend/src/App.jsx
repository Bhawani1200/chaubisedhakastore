import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
