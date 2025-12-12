import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";
import { useContext, useState, useEffect } from "react";

const EditPost = () => {
  const { posts,  handleEdit } = useContext(DataContext);
  const { id } = useParams();

  const post = posts.find((post) => post.id.toString() === id);

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  // Load post into local state
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post]);

  if (!post) return <div className="noResult"><h1>No results</h1></div>;

  return (
    <div className="editContainer">
      <h1>Edit Feedback</h1>
      
      <label>Title:</label>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        className="inputBox"
        placeholder="Feedback title"
      />

      <label>Body:</label>
      <textarea
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}
        className="textareaBox"
        placeholder="Feedback details"
      />

      <button 
        onClick={() => handleEdit(post.id, editTitle, editBody)}
        className="btn"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditPost;
