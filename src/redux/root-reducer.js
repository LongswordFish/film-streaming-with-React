import { combineReducers } from "redux";
import MovieReducer from "./movie/movie.reducer";

const rootReducer = combineReducers({
    movie:MovieReducer
});

export default rootReducer;