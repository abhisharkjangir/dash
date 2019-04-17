import axios from "../../utils/axios";
import getApiEndPoint from "../../apis";

export const logout = () => axios.get(getApiEndPoint('logout'));
