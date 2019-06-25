import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchEquiposSuccess = ( equipos ) => {
    return {
        type: actionTypes.FETCH_EQUIPOS_SUCCESS,
        equipos: equipos
    };
};

export const fetchEquiposFail = ( error ) => {
    return {
        type: actionTypes.FETCH_EQUIPOS_FAIL,
        error: error
    };
};

export const fetchEquiposStart = () => {
    return {
        type: actionTypes.FETCH_EQUIPOS_START
    };
};

export const addEquipo = (equipo) => {
    return {
        type: actionTypes.ADD_EQUIPO,
        equipo: equipo
    }
}

export const setEquipo = (equipo) => {
    return dispatch => {
        axios.put( `/equipos/${equipo.key}.json`, equipo.value )
            .then( res => {
                dispatch(addEquipo(equipo));
            })
            .catch( err => {
                dispatch(fetchEquiposFail(err));
            } );
    }
}

export const fetchEquipos = () => {
    return dispatch => {
        dispatch(fetchEquiposStart());
        axios.get( '/equipos.json' )
            .then( res => {
                const fetchedEquipos = [];
                for ( let key in res.data ) {
                    fetchedEquipos.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchEquiposSuccess(fetchedEquipos));
            } )
            .catch( err => {
                dispatch(fetchEquiposFail(err));
            } );
    };
};