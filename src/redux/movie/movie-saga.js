import {takeLatest,put, take} from 'redux-saga/effects';
import {all,call} from 'redux-saga/effects';
import MovieActionTypes from './movie.types';

import {getAllFilmsSuccess,getAllFilmsFailure,getSingleFilmSuccess,getSingleFilmFailure,getAllFilmsStart} from './movie.action';

const apiUrl = process.env.REACT_APP_API_URL;

export function* getAll(){
    try{
        const response = yield fetch(`${apiUrl}/api/films`, {
            method: "GET"});
        const data = yield response.json();
        yield put(getAllFilmsSuccess(data));
    }catch(error){
        console.log(error);
        yield put(getAllFilmsFailure(error.response.data));
    }
}


export function* onGetAllItems (){
    yield takeLatest(MovieActionTypes.GET_ALL_FILMS_START,getAll);
}


export function* getSingleFilm(movieId){
    try{
        const id = movieId.payload;
        const response = yield fetch(`${apiUrl}/api/films/${id}`, {
            method: "GET"});
        const data = yield response.json();
        yield put(getSingleFilmSuccess(data));
    }catch(error){
        console.log(error);
        yield put(getSingleFilmFailure(error.response.data));
    }
}


export function* onGetSingleFilm (){
    yield takeLatest(MovieActionTypes.GET_SINGLE_FILM_START,getSingleFilm);
}

export function* movieSagas(){
    yield all([
        call(onGetAllItems),call(onGetSingleFilm)])
}