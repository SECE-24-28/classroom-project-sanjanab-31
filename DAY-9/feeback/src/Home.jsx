import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";
import { SquarePen } from 'lucide-react';

const Home = ({ showAll = false }) => {
  const { searchResults, posts } = useContext(DataContext);
  const data = showAll ? posts : searchResults;

  return (
    <div className="cardContainer">
      {data && data.length > 0 ? (
        data.map((post) => (
          <div key={post.id} className="card">
            <Link to={`/edit/${post.id}`} className="editLink"><SquarePen /></Link>
            <h2 className="cardTitle">{post.title}</h2>
            <p className="cardBody">{post.body}</p>
            <p className="cardDate">{post.datetime || post.datatime}</p>
           
          </div>
        ))
      ) : (
        <p className="noResult">No feedback found</p>
      )}
    </div>
  );
};

export default Home;
