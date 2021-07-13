// import redux modules
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

// redux thunk middleware
import thunk from 'redux-thunk';

// import reducer
import movieReducer from '../features/Movies/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine all reducers
const rootReducers = combineReducers({
    movies: movieReducer,
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;