import { createSelector } from "reselect";

const selectMovie = state => state.movie;

export const selectAllItems = createSelector(
    [selectMovie],
    movie => movie.movies
)

export const selectAllMovies = createSelector(
    [selectMovie],
    movie => movie.movies.filter(movie=>movie.type==="movie")
)

export const selectAllTVs = createSelector(
    [selectMovie],
    movie => movie.movies.filter(movie=>movie.type==="TV")
)

export const selectFeaturedMovies = createSelector(
    [selectAllMovies],
    movies => movies.filter(movie=>movie.featured===true)
)

export const selectFeaturedTVs = createSelector(
    [selectAllTVs],
    movies => movies.filter(movie=>movie.featured===true)
)

export const selectSpecials = special=>createSelector(
    [selectMovie],
    movie => movie.movies.filter(movie=>movie.movie_type===special)
)

export const selectMovieById = id => createSelector(
    [selectMovie],
    movie => movie.movies.find(item=>item.id===id)
)

export const selectSingleFilm = () => createSelector(
    [selectMovie],
    movie => movie.singleFilm
)




