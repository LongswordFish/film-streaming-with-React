import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectPurchasedItems = createSelector(
    [selectCart],
    cart => cart.purchased_items
);

export const selectRentedItems = createSelector(
    [selectCart],
    cart => cart.rented_items
);

export const selectItemInCart = id => createSelector(
    [selectCart],
    cart => (cart.purchased_items.some(item=>item.id==id) || cart.rented_items.some(item=>item.id==id))
)
