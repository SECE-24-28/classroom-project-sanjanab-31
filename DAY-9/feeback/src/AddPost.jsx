import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const AddPost = () => {
  const { title, setTitle, body, setBody, handleSubmit } =
    useContext(DataContext);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br/>

      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /><br/>

      <button type="submit">Save</button>
    </form>
  );
};

export default AddPost;
