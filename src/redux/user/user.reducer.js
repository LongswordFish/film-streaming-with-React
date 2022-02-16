import UserActionTypes from './user.type';

const INITIAL_STATE={
    currentUser:null,
    error:null,
    signUpSuccess:false
}


const userReducer = (currentState = INITIAL_STATE,action)=>{
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...currentState,
                currentUser: action.payload,
                error:null
            };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...currentState,
                signUpSuccess:true,
                error:action.payload
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...currentState,
                error: action.payload
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...currentState,
                currentUser: null,
                error:null
            };
        case UserActionTypes.SIGN_OUT:
            return{
                ...currentState,
                currentState:null
            }
        default:
            return currentState;
    }
}

export default userReducer;