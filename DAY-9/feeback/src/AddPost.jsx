import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const AddPost = () => {
  const { title, setTitle, body, setBody, handleSubmit } =
    useContext(DataContext);

  return (
    <form onSubmit={handleSubmit} className="formBox">
      <input
        type="text"
        placeholder="Title"
        className="inputBox"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

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
