import { useParams, useNavigate } from "react-router-dom";
import DataContext from "./context/DataContext";
import { useContext, useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const EditPost = () => {
  const { posts,  handleEdit } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id.toString() === id);

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post]);

  const handleSave = () => {
    handleEdit(post.id, editTitle, editBody);
    navigate("/");
  };

  if (!post) return <div className="noResult"><h1>Feedback Not Found</h1></div>;

  return (
    <div className="editContainer">
      <button onClick={() => navigate(-1)} className="backButton">
        <ArrowLeft size={18} /> Back
      </button>
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
        onClick={handleSave}
        className="btn"
        disabled={!editTitle.trim() || !editBody.trim()}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditPost;
