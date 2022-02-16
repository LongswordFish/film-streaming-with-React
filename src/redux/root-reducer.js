import { combineReducers } from "redux";
import MovieReducer from "./movie/movie.reducer";
import CartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    movie:MovieReducer,
    cart:CartReducer,
    user:userReducer
});

export default rootReducer;