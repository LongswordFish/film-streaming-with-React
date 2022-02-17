import CartActionTypes from "./cart.types";
import { removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    items:[]
};

const CartReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case CartActionTypes.ADD_ITEM_TO_ITEMS:
            return {
                ...state,
                items:[...state.items,action.payload]
            }
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                items:removeItemFromCart(state.items, action.payload),
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                items:[]
            }
        default:
            return state;
    }
};



export default  CartReducer;