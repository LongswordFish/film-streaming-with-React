import { createSelector } from "reselect";

const selectOrder = state =>state.order;

export const selectError = createSelector(
    [selectOrder],
    order=>order.error
)

export const selectOrders = createSelector(
    [selectOrder],
    order=>order.orders
)
