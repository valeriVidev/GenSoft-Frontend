import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import SelectedProperty from "./pages/SelectedProperty";
import FiltersHandle from "./pages/AdminPanelFilterCreate";
import AdminPanel from "./pages/AdminPanel";
import PropertiesHandle from "./pages/AdminHandleProperties";
import "./componentsCss/HomePage.module.css";
import Authentication from "./components/Authentication";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/bg/:link" element={<SelectedProperty />} />
        <Route path="/property/en/:link" element={<SelectedProperty />} />
        <Route path="/login" element={<><Authentication /> <LogIn /></>} />
        <Route path="/admin" element={<><Authentication /><AdminPanel /> </>} />
        <Route path="/functionality/filters" element={<><Authentication /> <FiltersHandle /></>} />
        <Route path="/functionality/properties" element={<><Authentication /><PropertiesHandle /> </>} />
      </Routes>

    </>
  );
}

export default App;
