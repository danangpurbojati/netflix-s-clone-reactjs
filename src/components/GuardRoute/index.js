import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const GuardRoute = ({children,  ...rest}) => {
    const { auth } = useSelector(state => state.firebase)
    return (
        <Route {...rest}> 
            {
               isLoaded(auth) && !isEmpty(auth) ? children :  <Redirect to="/login" />
            }
        </Route>
    )
}

export default GuardRoute
