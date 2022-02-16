import MovieActionTypes from"./movie.types";

export const getAllFilms = async dispatch =>{
    try{
        const response = await fetch("http://localhost:8080/api/films", {
            method: "GET"});
        const data = await response.json();
        console.log(data);
        dispatch({
            type:MovieActionTypes.GET_ALL_FILMS,
            payload:data
        });
    }catch(error){
        console.log(error.response);
        dispatch({
            type:MovieActionTypes.ERRORS,
            payload:error.response
        });
    }
};    

export const getAllFilmsStart = ()=> ({
    type:MovieActionTypes.GET_ALL_FILMS_START
});

export const getAllFilmsSuccess = (data)=> ({
    type:MovieActionTypes.GET_ALL_FILMS_SUCCESS,
    payload:data
});


export const getAllFilmsFailure = (error)=> ({
    type:MovieActionTypes.GET_ALL_FILMS_FAILURE,
    payload:error
});

export const getSingleFilmStart = (movieId)=> ({
    type:MovieActionTypes.GET_SINGLE_FILM_START,
    payload:movieId
});

export const getSingleFilmSuccess = (data)=> ({
    type:MovieActionTypes.GET_SINGLE_FILM_START_SUCCESS,
    payload:data
});


export const getSingleFilmFailure = (error)=> ({
    type:MovieActionTypes.GET_ALL_FILMS_FAILURE,
    payload:error
});