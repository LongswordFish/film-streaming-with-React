import CartActionTypes from "./cart.types";
import { addPurchaseItemToCart,addRentItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    purchased_items:[],
    rented_items:[]
};

const CartReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case CartActionTypes.ADD_ITEM_TO_PURCHASE_ITEMS:
            return {
                ...state,
                purchased_items:addPurchaseItemToCart(state.purchased_items,action.payload)
            }
        case CartActionTypes.ADD_ITEM_TO_RENT_ITEMS:
            return {
                ...state,
                rented_items:addRentItemToCart(state.rented_items,action.payload)
            }
        default:
            return state;
    }
};



export default  CartReducer;