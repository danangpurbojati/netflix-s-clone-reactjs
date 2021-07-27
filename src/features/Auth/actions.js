import { CLEAR_EMAIL, CLEAR_REGISTER_ERROR, CLEAR_SIGNIN_ERROR, ERROR_AUTH, REGISTER_ERROR, SET_EMAIL } from "./constants";

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        email
    }
}

export const clearEmail = () => {
    return {
        type: CLEAR_EMAIL
    }
}

export const errorAuth = (error) => {
   return {
       type: ERROR_AUTH,
       error
   } 
}

export const clearSignInError = () => {
    return {
        type: CLEAR_SIGNIN_ERROR
    }
}

export const registerError = error => {
    return {
        type: REGISTER_ERROR,
        error
    }
}

export const clearRegisterError = () => {
    return {
        type: CLEAR_REGISTER_ERROR
    }
}

export const signIn = credentials => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            const firebase = getFirebase();

            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            );

            dispatch(clearSignInError());

        } catch (error) {
            dispatch(errorAuth(error.message));
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            const firebase = getFirebase();
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error)
        }
    }
}

export const signUp = (newUser) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            const firebase = getFirebase();
            const firestore = getFirebase().firestore();

            const signUpData = await firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            );

            await firestore.collection('users').doc(signUpData.user.uid).set({
                fullname: newUser.fullname
            })

            dispatch(clearEmail());
            dispatch(clearRegisterError());

        } catch (error) {
            console.log('dari error handler',error);
            dispatch(registerError(error.message));
        }
    }
}