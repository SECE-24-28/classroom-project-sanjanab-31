import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const AddPost = () => {
  const { title, setTitle, body, setBody, handleSubmit } =
    useContext(DataContext);

  return (
    <form onSubmit={handleSubmit} className="formBox">
      <h1 className="formtitle">Add Feedback</h1>
      <p className="formpara">Share your thoughts and feedback with us</p>
      
      <label>Title:</label>
      <input
        type="text"
        placeholder="Enter feedback title"
        className="inputBox"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      
      <label>Body:</label>
      <textarea
        placeholder="Enter feedback details"
        className="textareaBox"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <button className="btn" type="submit">Submit Feedback</button>
    </form>
  );
};

export default AddPost;
