  import React, { useContext } from "react";
  import DataContext from "./context/DataContext";
  import { Link } from "react-router-dom";
  import { SquarePen } from 'lucide-react';
  import {Trash2} from 'lucide-react';
  const Home = ({ showAll = false }) => {
    const { searchResults, posts, handleDelete } = useContext(DataContext);
    const data = showAll ? posts : searchResults;

    const [showIcons, setShowIcons] = React.useState(false);
    return (
      <div className="hometotal">
        <div className="topBar">
      <button 
          className="btnedit" 
          onClick={() => setShowIcons(!showIcons)}
        >
          {showIcons ? "Hide Edit Icons" : "Edit"}
        </button>
        
      </div>
      <div className="cardContainer">
        

        {data && data.length > 0 ? (
          data.map((post) => (
            <div key={post.id} className="card">
              
              {showIcons && <Link to={`/edit/${post.id}`} className="editLink"><SquarePen /></Link>}
              {showIcons && <span className="btndel" onClick={() => handleDelete(post.id)}><Trash2 /></span>}
              <h2 className="cardTitle">{post.title}</h2>
              <p className="cardBody">{post.body}</p>
              <p className="cardDate">{post.datetime || post.datatime}</p>
            
            </div>
          ))
        ) : (
          <p className="noResult">No feedback found</p>
        )}
      </div>
      </div>
    );
  };

  export default Home;
