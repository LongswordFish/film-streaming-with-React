import fakeDB from "./FakeDB";

export const getMovies = ()=>{
    const moviesReturned=fakeDB.filter(movie=>movie.type==="movie");
    return moviesReturned;
};

export const getTVs = ()=>{
    const TVsReturned=fakeDB.filter(movie=>movie.type==="TV");
    return TVsReturned;
};

export const getFeaturedMovies=()=>{
    const featuredMovies=getMovies().filter(movie=>movie.featured==true);
    return featuredMovies;
};

export const getFeaturedTVs=()=>{
    const featuredTVs=getTVs().filter(movie=>movie.featured==true);
    return featuredTVs;
};

export const getCrimes=()=>{
    const crimes=fakeDB.filter(movie=>movie.movie_type==="Crime");
    return crimes;
};
// getAllFeaturedProducts=()=>
// {

// };

export const getMovie=id=>{
    const movieReturned=fakeDB.find( (movie)=>{
        return movie.id==id;
    })

    return movieReturned;
};   

export const getAllMovies=()=>
{
    return fakeDB;
};
