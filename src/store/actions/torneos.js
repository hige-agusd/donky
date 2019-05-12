import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

// export const addIngredient = ( name ) => {
//     return {
//         type: actionTypes.ADD_INGREDIENT,
//         ingredientName: name
//     };
// };

export const setTorneo = ( torneos ) => {
    return {
        type: actionTypes.SET_TORNEO,
        torneo: torneos[0]
    };
};

export const fetchTorneoFailed = () => {
    return {
        type: actionTypes.FETCH_TORNEO_FAILED
    };
};

export const initTorneo = () => {
    return dispatch => {
        axios.get( '/torneos.json' )
            .then( response => {
               dispatch(setTorneo(response.data));
            } )
            .catch( error => {
                dispatch(fetchTorneoFailed());
            } );
    };
};