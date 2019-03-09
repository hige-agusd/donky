import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    currentTournament: null,
    error: false
};

// const addIngredient = ( state, action ) => {
//     const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
//     const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
//     const updatedState = {
//         ingredients: updatedIngredients,
//     }
//     return updateObject( state, updatedState );
// };

const setTorneo = (state, action) => {
    return updateObject( state, {
        currentTournament: action.torneo,
        error: false
    } );
};

const fetchTorneoFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // case actionTypes.ADD_TORNEO: return addIngredient( state, action );
        case actionTypes.SET_TORNEO: return setTorneo(state, action);    
        case actionTypes.FETCH_TORNEO_FAILED: return fetchTorneoFailed(state, action);
        default: return state;
    }
};

export default reducer;