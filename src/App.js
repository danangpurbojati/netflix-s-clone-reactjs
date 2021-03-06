import { createTheme , ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeMovie from './pages/HomeMovie';
import MoviesPage from './pages/MoviesPage';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';
import Register from './pages/Register';

// redux things
import { Provider } from 'react-redux';
import store, { rrfProps } from './app/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import Testing from './pages/Testing';
import GuardRoute from './components/GuardRoute';
import GuardOnlyRoute from './components/GuardOnlyRoute';

// private route

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div></div>;
    return children
};


const theme = createTheme ({
    shape: {
      borderRadius: 2
    },
    typography: {
        h4: {
            fontWeight: '600',
        },
        h6: {
            fontWeight: '600',
        },
        h5: {
            fontWeight: '600',
        },
        caption: {
            fontWeight: '600',
        }
    },
    palette: {
        primary: {
            main: '#000',
            dark: '#000000',
            light: '#333333'
        },
        secondary: {
            main: '#d50000',
            light: '##dd3333',
            dark: '#950000',
        },
        text: {
            secondary: '#303030'
        }
    }
});

function App() {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <AuthIsLoaded>
                        <Router>
                            <Navbar />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <GuardRoute exact path="/home">
                                    <HomeMovie />
                                </GuardRoute>
                                <GuardRoute exact path="/movies">
                                    <MoviesPage />
                                </GuardRoute>
                                <GuardRoute exact path="/movie-detail/:id">
                                    <MovieDetail />
                                </GuardRoute>
                                <GuardOnlyRoute exact path="/login">
                                    <Login />
                                </GuardOnlyRoute>
                                <GuardOnlyRoute exact path="/register">
                                    <Register />
                                </GuardOnlyRoute>
                                <Route exact path="/testing">
                                    <Testing />
                                </Route>
                            </Switch>
                        </Router>
                        <Footer />
                        </AuthIsLoaded>
                    </ThemeProvider>
                </StylesProvider>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App;
