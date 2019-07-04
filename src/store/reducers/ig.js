import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    novedades: false,
    galeria: false,
    loading: false,
};

const fetchIGFeedStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchIGFeedSuccess = ( state, action ) => {
    const [novedades, galeria] = action.igFeed.reduce(([p, f], e) => (e.tags.indexOf('novedades')  > -1 ? [[...p, e], f] : [p, [...f, e]]), [[], []]);
    return updateObject( state, {
        novedades,
        galeria,
        loading: false
    } );
};

const fetchIGFeedFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_IG_FEED_START: return fetchIGFeedStart( state, action );
        case actionTypes.FETCH_IG_FEED_SUCCESS: return fetchIGFeedSuccess( state, action );
        case actionTypes.FETCH_IG_FEED_FAIL: return fetchIGFeedFail( state, action );
        default: return state;
    }
};

export default reducer;