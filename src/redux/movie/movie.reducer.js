import MovieActionTypes from './movie.types';


const INITIAL_STATE = {
    movies:[],
    errors:"",
    singleFilm:null
};

const MovieReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case MovieActionTypes.ERRORS:
            return{
                ...state,
                errors:action.payload
            }
        case MovieActionTypes.GET_ALL_FILMS:
            return{
                ...state,
                movies:action.payload,
                errors:""
            }
        case MovieActionTypes.GET_ALL_FILMS_SUCCESS:
            return{
                ...state,
                movies:action.payload,
                errors:""
            }
        case MovieActionTypes.GET_ALL_FILMS_FAILURE:
            return{
                ...state,
                errors:action.payload
            }    
        case MovieActionTypes.GET_SINGLE_FILM_START_SUCCESS:
            return{
                ...state,
                singleFilm:action.payload,
                errors:""
            }
        case MovieActionTypes.GET_SINGLE_FILM_START_FAILURE:
            return{
                ...state,
                errors:action.payload
            }                  
        default:
            return state;
    }
};

export default  MovieReducer;