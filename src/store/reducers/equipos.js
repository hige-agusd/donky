import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    equipos: [],
    loading: false,
};

const fetchEquiposStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchEquiposSuccess = ( state, action ) => {
    return updateObject( state, {
        equipos: action.equipos,
        loading: false
    } );
};

const fetchEquiposFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addEquipo = (state, action ) => {
    const newEquipos = [...state.equipos];
    newEquipos.push(action.equipo.value)
    return updateObject(state, {equipos: newEquipos});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_EQUIPOS_START: return fetchEquiposStart( state, action );
        case actionTypes.FETCH_EQUIPOS_SUCCESS: return fetchEquiposSuccess( state, action );
        case actionTypes.FETCH_EQUIPOS_FAIL: return fetchEquiposFail( state, action );
        case actionTypes.ADD_EQUIPO: return addEquipo( state, action );
        default: return state;
    }
};

export default reducer;