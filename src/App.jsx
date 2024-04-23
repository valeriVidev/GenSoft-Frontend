import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import AdminPanel from "./pages/AdminPanel";

import "./componentsCss/HomePage.module.css";
import Authentication from "./components/Authentication";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<><Authentication /> <LogIn /></>} />
        <Route path="/admin" element={<><Authentication /><AdminPanel /> </>} />
      </Routes>

    </>
  );
}

export default App;
