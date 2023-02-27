import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
