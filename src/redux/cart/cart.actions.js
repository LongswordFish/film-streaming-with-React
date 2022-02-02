import CartActionTypes from "./cart.types";

export const addItemToPurchaseItems = (item) =>({
    type:CartActionTypes.ADD_ITEM_TO_PURCHASE_ITEMS,
    payload:item
});

export const addItemToRentItems = (item) =>({
    type:CartActionTypes.ADD_ITEM_TO_RENT_ITEMS,
    payload:item
});

export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const clearCart = () =>({
    type:CartActionTypes.CLEAR_CART
});

export const clearItemFromCart = item =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});