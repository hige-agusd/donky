import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchJugadorasSuccess = ( jugadoras ) => {
    return {
        type: actionTypes.FETCH_JUGADORAS_SUCCESS,
        jugadoras: jugadoras
    };
};

export const fetchJugadorasFail = ( error ) => {
    return {
        type: actionTypes.FETCH_JUGADORAS_FAIL,
        error: error
    };
};

export const fetchJugadorasStart = () => {
    return {
        type: actionTypes.FETCH_JUGADORAS_START
    };
};

export const addJugadora = (jugadora) => {
    return {
        type: actionTypes.ADD_JUGADORA,
        jugadora: jugadora
    }
}

export const setJugadora = (jugadora) => {
    return dispatch => {
        axios.put( `/jugadoras/${jugadora.key}.json`, jugadora.value )
            .then( res => {
                dispatch(addJugadora(jugadora));
                // dispatch(fetchJugadoras(jugadora));
            })
            .catch( err => {
                dispatch(fetchJugadorasFail(err));
            } );
    }
}

export const fetchJugadoras = () => {
    return dispatch => {
        dispatch(fetchJugadorasStart());
        axios.get( '/jugadoras.json' )
            .then( res => {
                const fetchedJugadoras = [];
                for ( let key in res.data ) {
                    fetchedJugadoras.push( {
                        ...res.data[key],
                        nro_socio: key
                    } );
                }
                dispatch(fetchJugadorasSuccess(fetchedJugadoras));
            } )
            .catch( err => {
                dispatch(fetchJugadorasFail(err));
            } );
    };
};