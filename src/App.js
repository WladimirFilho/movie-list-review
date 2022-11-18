import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App bg-slate-900">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
