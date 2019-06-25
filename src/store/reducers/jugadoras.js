import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    jugadoras: [],
    loading: false,
};

const fetchJugadorasStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchJugadorasSuccess = ( state, action ) => {
    return updateObject( state, {
        jugadoras: action.jugadoras,
        loading: false
    } );
};

const fetchJugadorasFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addJugadora = (state, action ) => {
    const newJugadora = {
        nro_socio: action.jugadora.key,
        ...action.jugadora.value
    };
    const newJugadoras = [...state.jugadoras];
    newJugadoras.push(newJugadora);
    return updateObject(state, {jugadoras: newJugadoras});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_JUGADORAS_START: return fetchJugadorasStart( state, action );
        case actionTypes.FETCH_JUGADORAS_SUCCESS: return fetchJugadorasSuccess( state, action );
        case actionTypes.FETCH_JUGADORAS_FAIL: return fetchJugadorasFail( state, action );
        case actionTypes.ADD_JUGADORA: return addJugadora( state, action );
        default: return state;
    }
};

export default reducer;