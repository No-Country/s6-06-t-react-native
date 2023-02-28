import { useSelector, useDispatch} from "react-redux";
import { Cambiador } from "../../../../redux/actions/actions";
const variable = useSelector(state => state.login.variable); // CON ESTA LINEA OBTIENES LA VARIABLE GLOBAL
console.log(variable);
const dispatch = useDispatch();
const handler = () => {
    dispatch(Cambiador("CAMBIADOR", !variable)); //CON ESTA LINEA CAMBIAS LA VARIABLE GLOBAL DEL REDUX 
}