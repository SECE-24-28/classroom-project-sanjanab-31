import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const AddPost = () => {
  const { title, setTitle, body, setBody, handleSubmit } =
    useContext(DataContext);

  return (
    <form onSubmit={handleSubmit} className="formBox">
      <h1 className="formtitle">Add Feedback</h1>
      <p className="formpara">this form is to add your feeback!!!</p>
      <label >Title:</label>
      <input
        type="text"
        placeholder="Title"
        className="inputBox"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label >Body:</label>
      <textarea
        placeholder="Body"
        className="textareaBox"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="btn" type="submit">Save</button>
    </form>

  );
};

export default AddPost;
