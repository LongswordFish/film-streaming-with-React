import react from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllItems,selectAllMovies,selectAllTVs } from "../../redux/movie/movie.selectors";

import AllListing from "../../components/all-listing/all-listing.component";
import MoviesListing from "../../components/movies-listing/movies-listing.component";
import "./listing.styles.scss";


const ListingPage = () =>{

    const [type, setType] = useState("ALL");

    return(
        <div className="movie-listing">
            <div className="buttons-wrapper-in-listing">
                <span className="movieListingButton" onClick={() => setType("MOVIE")} >Movies</span>
                <p className="delimter"  > | </p>
                <span className="movieListingButton" onClick={() => setType("TV")}>TVs</span>
                <p className="delimter" > | </p>
                <span className="movieListingButton" onClick={() => setType("ALL")} >All</span>
            </div>

            {
                (type==="MOVIE")
                ?<MoviesListing />
                :<AllListing />
            }

{/* 

                <div class="row" id="listing">

                    <div class="card pic col-6 col-md-2 col-sm-3">
                        <p class="card-text" style="font-size: smaller; display:flex;justify-content: space-between;">
                            <span>Rent:${{ this.price_to_rent }}</span>
                            <span>Buy:${{ this.price_to_purchase }}</span>
                        </p>
                        <a href="/movie/movies/{{this._id}}"><img src="/upload/{{this.small_picture}}" class="card-img" alt="..."></a>
                        <div class="card-body">
                            <h5 class="card-title">{{ this.movie_title }}</h5>
                        </div>
                    </div>


                </div> */}
        </div>
    )
}

export default ListingPage;
