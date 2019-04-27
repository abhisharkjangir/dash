import { ADDING_BLOG, ADD_BLOG_SUCCESS, ADD_BLOG_ERROR } from "./addBlogConstants";

const initialState = {
  error: null,
  isAdding: false,
};

const AddBlogReducer = (state = initialState, {type, data}) => {
  switch (type) {
    case ADDING_BLOG:
      return {...state, isAdding : true};
    case ADD_BLOG_SUCCESS:
      return {...state, isAdding : false, error:null};
    case ADD_BLOG_ERROR:
      return {...state, isAdding : false, error : data};
    default:
      return state;
  }
};

export default AddBlogReducer;
