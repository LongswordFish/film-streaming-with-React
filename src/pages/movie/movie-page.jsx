import react from "react";
import { Routes,Route } from "react-router-dom";
import { useParams } from "react-router-dom";


import ListingPage from "../listing/listing.component";


const TVsListing = () =>(
    <div>TVsListing</div>
)

const MovieItem = () =>{

    const params = useParams();
    return(
    <div>MovieItem is {params.movieid}</div>
    );
}


const MoviesPage = () => {
    return (
        <div className='movies-page'>
            <Routes>
                <Route path='/listing' element={<ListingPage/>} />
                <Route path='/:movieid' element={<MovieItem/>} />
            </Routes>
        </div>
    );
}

export default MoviesPage;
