import { CLEAR_EMAIL, CLEAR_REGISTER_ERROR, CLEAR_SIGNIN_ERROR, ERROR_AUTH, REGISTER_ERROR, SET_EMAIL } from "./constants";

const initialState = {
    email: '',
    loginError: '',
    registerError: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case SET_EMAIL: 
            return {
                ...state,
                email: action.email
            }
        
        case CLEAR_EMAIL:
            return {
                ...state,
                email: ''
            }
        case ERROR_AUTH:
            return {
                ...state,
                loginError: action.error
            }
        
        case CLEAR_SIGNIN_ERROR:
            return {
                ...state,
                loginError: ''
            }
        
        case REGISTER_ERROR:
            return {
                ...state,
                registerError: action.error
            }
        
        case CLEAR_REGISTER_ERROR:
            return {
                ...state,
                registerError: ''
            }

        default:
            return state;
    }
}

export default reducer;