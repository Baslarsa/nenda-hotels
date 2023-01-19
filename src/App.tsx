import "./App.css";
import LayoutNavigation from "./components/LayoutNavigation";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <LayoutNavigation />
    </Router>
  );
}

export default App;
