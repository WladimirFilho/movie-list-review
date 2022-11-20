import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MoviesDetails from "./pages/MoviesDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Hero />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MoviesDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
