import "./App.css";
import { DataProvider } from "./context/DataContext";
import Home from "./Home";
import Search from "./search";
import AddPost from "./AddPost";

function App() {
  return (
    <DataProvider>
      <Search />
      <hr />
      <AddPost />
      <Home />
    </DataProvider>
  );
}

export default App;
