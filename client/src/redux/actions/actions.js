import {CAMBIADOR} from '../types/loginTypes';

const Cambiador = (payload) => {
    return({type: CAMBIADOR, payload: payload})
}
export {Cambiador}