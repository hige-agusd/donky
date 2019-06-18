import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    authUser: null,
};

const userLoggedIn = (state, action) => {
    return updateObject( state, {
        authUser: action.auth,
    } );
};

const userLoggedOut = (state, action) => {
    return updateObject( state, { authUser: null } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // case actionTypes.ADD_TORNEO: return addIngredient( state, action );
        case actionTypes.USER_LOGGED_IN: return userLoggedIn(state, action);    
        case actionTypes.USER_LOGGED_OUT: return userLoggedOut(state, action);
        default: return state;
    }
};

export default reducer;