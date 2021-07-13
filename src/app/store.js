// import redux modules
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

// firestrore
import firebase from '../firebaseConfig';
import { getFirebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import { createFirestoreInstance } from 'redux-firestore';

// redux thunk middleware
import thunk from 'redux-thunk';

// import reducer
import movieReducer from '../features/Movies/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine all reducers
const rootReducers = combineReducers({
    movies: movieReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

const store = createStore(rootReducers, composerEnhancer(
        applyMiddleware(thunk.withExtraArgument({ getFirebase }))
    )
);

export const rrfProps = {
    firebase,
    config: {
        userProfile: 'users'
    },
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store;