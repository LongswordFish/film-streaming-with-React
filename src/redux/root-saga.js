import {all,call} from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { movieSagas } from './movie/movie-saga';

export default function* rootSaga(){
    yield all([call(userSagas),call(movieSagas)]);
}