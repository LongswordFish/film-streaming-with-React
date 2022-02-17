import {takeLatest,put} from 'redux-saga/effects';
import {all,call} from 'redux-saga/effects';
import OrderActionTypes from './order.type';
import axios from 'axios';

import {createOrderStart,createOrderSuccess,createOrderFailure,getOrdersSuccess,getOrderSFailure} from './order.actions';

const apiUrl = process.env.REACT_APP_API_URL;

export function* createOrder(newOrder){
    try{
        const response = yield axios.post(`${apiUrl}/api/orders`, 
            JSON.stringify(newOrder.payload),{
                headers: {
                "Content-Type": "application/json"
                }
            }
        );
        console.log(response.data);
        yield put(createOrderSuccess());
    }catch(error){
        yield put(createOrderFailure(error.response.data));
    }
}

export function* getOrders(){
    try{
        const response = yield axios.get(`${apiUrl}/api/orders`, 
            {
                headers: {
                "Content-Type": "application/json"
                }
            }
        );
        console.log(response.data);
        yield put(getOrdersSuccess(response.data));
    }catch(error){
        yield put(getOrderSFailure(error.response.data));
    }
}


export function* onCreateOrderStart (){
    yield takeLatest(OrderActionTypes.CREATE_ORDER_START,createOrder);
}


export function* onGetOrdersStart (){
    yield takeLatest(OrderActionTypes.GET_ORDERS_START,getOrders);
}

export function* orderSagas(){
    yield all([
        call(onCreateOrderStart)
        ,call(onGetOrdersStart)
])
}