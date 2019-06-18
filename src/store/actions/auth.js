import * as actionTypes from './actionTypes';

export const userLoggedIn = ( auth ) => {
    return {
        type: actionTypes.USER_LOGGED_IN,
        auth: auth
    };
};

export const userLoggedOut = () => {
    return {
        type: actionTypes.USER_LOGGED_OUT
    };
};

export const setAuth = (auth) => {
    return dispatch => {
            if (auth) {
               dispatch(userLoggedIn(auth));
            } else {
                dispatch(userLoggedOut());
            }
    };
};