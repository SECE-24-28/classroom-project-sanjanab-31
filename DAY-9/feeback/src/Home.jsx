import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults } = useContext(DataContext);

  return (
    <div>
      {searchResults.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.datetime || post.datatime}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
