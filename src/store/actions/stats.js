import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchStatsSuccess = ( stats ) => {
    return {
        type: actionTypes.FETCH_STATS_SUCCESS,
        stats: stats
    };
};

export const fetchIndividualStatsSuccess = ( stats ) => {
    return {
        type: actionTypes.FETCH_MY_STATS_SUCCESS,
        stats: stats
    };
};

export const fetchStatsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_STATS_FAIL,
        error: error
    };
};

export const fetchStatsStart = () => {
    return {
        type: actionTypes.FETCH_STATS_START
    };
};
export const addStats = (stats) => {
    return {
        type: actionTypes.ADD_STATS,
        stats: stats
    }
}

export const fetchStatsById = (id) => {
    return dispatch => {
        dispatch(fetchStatsStart());
        axios.get( `/stats/${id}.json` )
            .then( res => {
                dispatch(fetchIndividualStatsSuccess(res.data));
            } )
            .catch( err => {
                dispatch(fetchStatsFail(err));
            } );
    };
};

export const setStats = (stats) => {
    return dispatch => {
        axios.put( `/stats/${stats.key}/${stats.index}.json`, stats.value )
            .then( res => {
                dispatch(addStats(stats));
            })
            .catch( err => {
                dispatch(fetchStatsFail(err));
            } );
    }
}

export const fetchStats = () => {
    return dispatch => {
        dispatch(fetchStatsStart());
        axios.get( '/stats.json' )
            .then( res => {
                dispatch(fetchStatsSuccess(res.data));
            } )
            .catch( err => {
                dispatch(fetchStatsFail(err));
            } );
    };
};