import "./App.css";
import { DataProvider } from "./context/DataContext";
import Home from "./Home";
import Search from "./search";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <h1 className="brand">Feedback</h1>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/add">Add Feedback</Link>
          <Link to="/search">Search</Link>
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
