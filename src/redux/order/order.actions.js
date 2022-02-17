import OrderActionTypes from './order.type';

export const createOrderStart = (order)=> ({
    type:OrderActionTypes.CREATE_ORDER_START,
    payload:order
})

export const createOrderSuccess = (user)=> ({
    type:OrderActionTypes.CREATE_ORDER_SUCCESS,
    payload:user
})

export const createOrderFailure = (error)=> ({
    type:OrderActionTypes.CREATE_ORDER_FAILURE,
    payload:error
})

export const getOrdersStart = ()=>({
    type:OrderActionTypes.GET_ORDERS_START
})

export const getOrdersSuccess = (orders)=> ({
    type:OrderActionTypes.GET_ORDERS_SUCCESS,
    payload:orders
})

export const getOrderSFailure = (error)=> ({
    type:OrderActionTypes.GET_ORDERS_FAILURE,
    payload:error
})

