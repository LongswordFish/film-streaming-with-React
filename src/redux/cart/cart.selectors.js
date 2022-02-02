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

export const selectAllItems = createSelector(
    [selectCart],
    cart => cart.rented_items.concat(cart.purchased_items)
);

export const selectItemInCart = id => createSelector(
    [selectCart],
    cart => (cart.purchased_items.some(item=>item.id==id) || cart.rented_items.some(item=>item.id==id))
)

export const selectCartItemsCount = createSelector(
    [selectAllItems],
    cartItems => cartItems.reduce((accumulated,cartItem)=>accumulated+1,0)
)

export const selectCartItemsTotal = createSelector(
    [selectCart],
    cart => (cart.rented_items.reduce((accumulated,cartItem)=>accumulated+cartItem.price_to_rent,0)+cart.purchased_items.reduce((accumulated,cartItem)=>accumulated+cartItem.price_to_purchase,0))
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

