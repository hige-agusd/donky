import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    stats: {},
    loading: false,
};

const fetchStatsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchStatsSuccess = ( state, action ) => {
    return updateObject( state, {
        stats: action.stats,
        loading: false
    } );
};

const fetchStatsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addStats = (state, action ) => {
    const newStats = {...state.stats};
    newStats[action.stats.key][action.stats.index] = action.stats.value;
    return updateObject(state, {stats: newStats});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_STATS_START: return fetchStatsStart( state, action );
        case actionTypes.FETCH_STATS_SUCCESS: return fetchStatsSuccess( state, action );
        case actionTypes.FETCH_STATS_FAIL: return fetchStatsFail( state, action );
        case actionTypes.ADD_STATS: return addStats( state, action );
        default: return state;
    }
};

export default reducer;