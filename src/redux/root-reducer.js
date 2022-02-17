import { combineReducers } from "redux";
import MovieReducer from "./movie/movie.reducer";
import CartReducer from "./cart/cart.reducer";
import UserReducer from "./user/user.reducer";
import OrderReducer from "./order/order.reducer";
const rootReducer = combineReducers({
    movie:MovieReducer,
    cart:CartReducer,
    user:UserReducer,
    order:OrderReducer
});

export default rootReducer;