import CartActionTypes from "./cart.types";

export const addItemToPurchaseItems = (item) =>({
    type:CartActionTypes.ADD_ITEM_TO_PURCHASE_ITEMS,
    payload:item
});

export const addItemToRentItems = (item) =>({
    type:CartActionTypes.ADD_ITEM_TO_RENT_ITEMS,
    payload:item
});