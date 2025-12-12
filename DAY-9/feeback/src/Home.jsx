import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults } = useContext(DataContext);

  return (
    <div className="cardContainer">
      {searchResults.map((post) => (
        <div key={post.id} className="card">
          <h2 className="cardTitle">{post.title}</h2>
          <p className="cardBody">{post.body}</p>
          <p className="cardDate">{post.datetime || post.datatime}</p>
        </div>
      ))}
    </div>

  );
};

export default Home;
