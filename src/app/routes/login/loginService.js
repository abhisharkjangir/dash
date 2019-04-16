import axios from "../../utils/axios";
import getApiEndPoint from "../../apis";

export const login = (payload) => axios.post(getApiEndPoint('login'), payload);
