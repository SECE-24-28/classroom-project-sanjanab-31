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

  // Fetch initial posts
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/feedback");
      setPosts(res.data);
    };
    fetchData();
  }, []);

  // Search filter
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filtered);
  }, [search, posts]);

  // DELETE POST
  const handleDelete = async (id) => {
    try {
      await api.delete(`/feedback/${id}`);
      const newList = posts.filter((post) => post.id !== id);
      setPosts(newList);

      alert("Data Deletion successful");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT POST
  const handleEdit = async (id, editTitle, editBody) => {
    const datetime = format(new Date(), "MMM dd, yyyy pp");

    const updatedPost = { id, title: editTitle, body: editBody, datetime };

    await api.put(`/feedback/${id}`, updatedPost);

    const updatedList = posts.map((post) =>
      post.id === id ? updatedPost : post
    );

    setPosts(updatedList);

    alert("Data Updated Successfully");
    navigate("/");
  };

  // ADD NEW POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : 1;
    const datetime = format(new Date(), "MMM dd, yyyy pp");

    const newObj = { id, title, body, datetime };

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
        handleDelete,
        handleEdit
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
