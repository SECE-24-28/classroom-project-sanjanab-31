import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";
import { useContext } from "react";

export const EditPost = () => 
    {
  
        const { posts } = useContext(DataContext);
        const { id } = useParams();
        const post = posts.find((post) => (post.id).toString() === id);
        if (!post) {
            return (
                <h1>no results</h1>
            );
        }
        return (
            <div>
                <h1>Edit Post {post.id}</h1>
                <input type="text" value={post.title} className="inputBox" />
                <br/>
                <textarea value={post.body}  className="textareaBox" />
                <button className="btn">Save</button>
            </div>
        );
    }
export default EditPost;