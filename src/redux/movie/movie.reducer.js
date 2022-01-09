import MovieActionTypes from './movie.types';
import fakeDB from './FakeDB';


const INITIAL_STATE = {
    movies:fakeDB
};

const MovieReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        default:
            return state;
    }
};

export default  MovieReducer;