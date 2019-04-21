import axios from "../../utils/axios";
import getApiEndPoint from "../../apis";

export const blogs = payload => axios.post(getApiEndPoint("blogs"), payload);
