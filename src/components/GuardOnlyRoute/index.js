import React from 'react';
import {useSelector} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const GuardOnlyRoute = ({children,  ...rest}) => {
    const { auth } = useSelector(state => state.firebase);
    return (
        <Route {...rest}> 
            {
               isLoaded(auth) && isEmpty(auth) ? children :  <Redirect to="/" />
            }
        </Route>
    )
}

export default GuardOnlyRoute
