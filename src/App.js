import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MoviesDetails from "./pages/MoviesDetails";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(undefined);

  const { auth } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (user === undefined) return <p>Loading...</p>;

  return (
    <div className="App">
      <AuthContextProvider value={{ user }}>
        <Hero />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<MoviesDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
