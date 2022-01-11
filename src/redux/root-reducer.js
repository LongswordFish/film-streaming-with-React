import { combineReducers } from "redux";
import MovieReducer from "./movie/movie.reducer";
import CartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    movie:MovieReducer,
    cart:CartReducer
});

export default rootReducer;