import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchIGFeedSuccess = ( igFeed ) => {
    return {
        type: actionTypes.FETCH_IG_FEED_SUCCESS,
        igFeed: igFeed
    };
};

export const fetchIGFeedFail = ( error ) => {
    return {
        type: actionTypes.FETCH_IG_FEED_FAIL,
        error: error
    };
};

export const fetchIGFeedStart = () => {
    return {
        type: actionTypes.FETCH_IG_FEED_START
    };
};

export const fetchIGFeed = () => {
    return dispatch => {
        dispatch(fetchIGFeedStart());
        axios.get( `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_IG_API_TOKEN}` )
            .then( res => {
                dispatch(fetchIGFeedSuccess(res.data.data));
            } )
            .catch( err => {
                dispatch(fetchIGFeedFail(err));
            } );
    };
};