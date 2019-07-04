import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchStaffSuccess = ( staff ) => {
    return {
        type: actionTypes.FETCH_STAFF_SUCCESS,
        staff: staff
    };
};

export const fetchStaffFail = ( error ) => {
    return {
        type: actionTypes.FETCH_STAFF_FAIL,
        error: error
    };
};

export const fetchStaffStart = () => {
    return {
        type: actionTypes.FETCH_STAFF_START
    };
};

export const addStaffMember = (staffMember) => {
    return {
        type: actionTypes.ADD_STAFF_MEMBER,
        staffMember: staffMember
    }
}

export const setStaffMember = (staffMember) => {
    return dispatch => {
        axios.put( `/staff/${staffMember.index}.json`, staffMember.value )
            .then( res => {
                dispatch(addStaffMember(staffMember));
            })
            .catch( err => {
                dispatch(fetchStaffFail(err));
            } );
    }
}

export const fetchStaff = () => {
    return dispatch => {
        dispatch(fetchStaffStart());
        axios.get( '/staff.json' )
            .then( res => {
                const fetchedStaff = res.data !== null ? res.data : [];
                dispatch(fetchStaffSuccess(fetchedStaff));
            } )
            .catch( err => {
                dispatch(fetchStaffFail(err));
            } );
    };
};