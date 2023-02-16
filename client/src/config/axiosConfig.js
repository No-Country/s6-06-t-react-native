import axios from "axios";
import { URL_BACK } from ".";

export const reqResApi = axios.create({
    baseURL : URL_BACK
});
