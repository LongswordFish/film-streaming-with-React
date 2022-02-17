import OrderActionTypes from './order.type';

const INITIAL_STATE={
    orders:[],
    error:null,
    order:null
}


const OrderReducer = (currentState = INITIAL_STATE,action)=>{
    switch (action.type) {
        case OrderActionTypes.CREATE_ORDER_SUCCESS:
            return {
                ...currentState,
                error:null
            };
        case OrderActionTypes.CREATE_ORDER_FAILURE:
            return {
                ...currentState,
                error:action.payload
            };
        case OrderActionTypes.GET_ORDERS_SUCCESS:
            return {
                ...currentState,
                orders:action.payload,
                error:null
            };
        case OrderActionTypes.GET_ORDERS_FAILURE:
            return {
                ...currentState,
                error:action.payload
            };
        
        default:
            return currentState;
    }
}

export default OrderReducer;