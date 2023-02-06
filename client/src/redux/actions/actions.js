import { LOG_IN, SIGN_IN, SIGN_OUT} from "./actionsTypes";

const LogIn = (payload) => {
    //NOTA: COMO ARGUMENTO DEBERIA HABER UN PAYLOAD QUE DEBERIA CONTENER EL CORREO Y CONTRASEÑA DEL USUARIO (EN UN OBJETO)
    //ACA DEBERÍA TOMAR UNA PROMESA QUE NOS DEVUELVA UN JSON DE SI PASO O NO 
    //POR AHORA LO TRABAJARÉ TODO SINCRONO ,SIN LLAMADAS DE APIS, NI PEDIDA DE PAYLOAD
    return ({type: LOG_IN, payload: payload})
}
const SignIn = (payload) => {
    return ({type:SIGN_IN, payload: payload})
}

const SignOut = () => {
    return ({type: SIGN_OUT})
}
export {LogIn, SignIn, SignOut}