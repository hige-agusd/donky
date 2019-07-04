import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    staff: [],
    loading: false,
};

const fetchStaffStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchStaffSuccess = ( state, action ) => {
    return updateObject( state, {
        staff: action.staff,
        loading: false
    } );
};

const fetchStaffFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addStaffMember = (state, action ) => {
    const newStaff = [...state.staff];
    newStaff[action.staffMember.index] = action.staffMember.value;
    return updateObject(state, {staff: newStaff});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_STAFF_START: return fetchStaffStart( state, action );
        case actionTypes.FETCH_STAFF_SUCCESS: return fetchStaffSuccess( state, action );
        case actionTypes.FETCH_STAFF_FAIL: return fetchStaffFail( state, action );
        case actionTypes.ADD_STAFF_MEMBER: return addStaffMember( state, action );
        default: return state;
    }
};

export default reducer;