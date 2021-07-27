// import redux modules
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

// firebase
import firebase from '../firebaseConfig';
import { getFirebase } from 'react-redux-firebase';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

// redux thunk middleware
import thunk from 'redux-thunk';

// import reducer
import movieReducer from '../features/Movies/reducer';
import authReducer from '../features/Auth/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine all reducers
const rootReducers = combineReducers({
    movies: movieReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const store = createStore(rootReducers, composerEnhancer(
        applyMiddleware(thunk.withExtraArgument({ getFirebase }))
    )
);

export const rrfProps = {
    firebase,
    config: {
        userProfile: 'users',
        useFirestoreForProfile: true
    }, //please with firestore collection
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store;