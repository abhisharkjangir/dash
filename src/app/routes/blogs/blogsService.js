import axios from "../../utils/axios";
import getApiEndPoint from "../../apis";

export const blogs = () => axios.get(getApiEndPoint('blogs'));
