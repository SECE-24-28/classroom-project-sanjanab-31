import "./App.css";
import { DataProvider } from "./context/DataContext";
import Home from "./Home";
import Search from "./search";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function AppContent() {
  return (
    <>
      <nav className="navbar">
        <h1 className="brand">Feedback</h1>
        <div className="navLinks">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>Add Feedback</NavLink>
          <NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>Search</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home showAll={true} />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/search" element={<><Search /><Home /></>} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>  
      <DataProvider>
        <AppContent />
      </DataProvider>
    </Router>
  );
}


export default App;
