import { createContext, useState, useEffect } from "react";
import { format } from "date-fns";
import api from "../api/Post";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/feedback");
      setPosts(res.data);
    };
    fetchData();
  }, []);

  // Search Filter
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filtered);
  }, [search, posts]);

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const datetime = format(new Date(), "MMM dd, yyyy pp");

    const newObj = { id, title, datetime, body };

    await api.post("/feedback", newObj);

    setPosts([...posts, newObj]);
    setTitle("");
    setBody("");
    alert("Data Insertion successful");
    navigate("/");
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        search,
        setSearch,
        searchResults,
        title,
        setTitle,
        body,
        setBody,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
