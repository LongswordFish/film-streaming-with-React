import {takeLatest,put} from 'redux-saga/effects';
import {all,call} from 'redux-saga/effects';
import UserActionTypes from './user.type';
import axios from 'axios';

import setToken from '../security-utils/set-jwttoken';
import jwtDecode from 'jwt-decode';

import {signInSuccess,signInFailure,signUpSuccess,signUpFailure} from './user.actions';

const apiUrl = process.env.REACT_APP_API_URL;

export function* signUp(newUserInfo){
    try{
        yield axios.post(`${apiUrl}/api/users/register`, 
        JSON.stringify(newUserInfo.payload),{
            headers: {
            "Content-Type": "application/json"
            }
        }
         );
        yield put(signUpSuccess({"success":"Sign in success,please click sign in"}));
    }catch(error){
        yield put(signUpFailure(error.response.data));
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* signIn(emailAndPassword){
    try{
        const response = yield axios.post(`${apiUrl}/api/users/login`, 
            JSON.stringify(emailAndPassword.payload),{
                headers: {
                "Content-Type": "application/json"
                }
            }
        );
        console.log(response);
        const {token} = response.data;

        localStorage.setItem("jwtToken",token);

        setToken(token);

        const jwt_decode = jwtDecode(token);

        console.log(jwt_decode+" is jwt decode");
        yield put(signInSuccess(jwt_decode));
    }catch(error){
        yield put(signInFailure(error.response.data));
    }
}


export function* onSignInStart (){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signIn);
}

export function* userSagas(){
    yield all([
        call(onSignUpStart),call(onSignInStart)])
}