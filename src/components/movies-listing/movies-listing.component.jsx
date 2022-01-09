import react from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllItems,selectAllMovies,selectAllTVs } from "../../redux/movie/movie.selectors";



const MoviesListing = () =>{
    const items = useSelector(selectAllMovies);

    return(
        <div className="listing">
            {items.map(item=>(
                <div key={item.id}>{item.movie_title}</div>
            ))}
        </div>
    )

}

export default MoviesListing;