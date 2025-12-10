import React, {useContext} from "react";
import DataContext from "./context/DataContext";

const One =() =>{
    const {num}=useContext(DataContext)

    return(
        <div>
            <button>{num}</button>
        </div>
    )
}

export default One