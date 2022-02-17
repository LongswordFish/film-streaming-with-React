import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectAllCartItems = createSelector(
    [selectCart],
    cart => cart.items
);

export const selectItemInCart = id => createSelector(
    [selectCart],
    cart => cart.items.some(item=>item.id==id)
)

export const selectCartItemsCount = createSelector(
    [selectAllCartItems],
    cartItems => cartItems.reduce((accumulated,cartItem)=>accumulated+1,0)
)

export const selectCartItemsTotal = createSelector(
    [selectCart],
    cart => cart.items.reduce((accumulated,cartItem)=>accumulated+cartItem.price_to_purchase,0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

