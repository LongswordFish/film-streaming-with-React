import react from "react";
import { Routes,Route } from "react-router-dom";
import { useParams } from "react-router-dom";


import ListingPage from "../listing/listing-page";
import MovieDetailPage from "../movie-detail/movie-detail-page";

const MoviesPage = () => {
    return (
        <div className='movies-page'>
            <Routes>
                <Route path='/listing' element={<ListingPage/>} />
                <Route path='/:movieid' element={<MovieDetailPage/>} />
            </Routes>
        </div>
    );
}

export default MoviesPage;
