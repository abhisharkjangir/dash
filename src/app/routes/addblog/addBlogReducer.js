import { ADDING_BLOG, ADD_BLOG_SUCCESS, ADD_BLOG_ERROR, UPDATE_FORM_DATA } from "./addBlogConstants";

const initialState = {
  error: null,
  isAdding: false,
  formData: {
    title: "",
    author: "",
    keywords: "",
    image: "",
    imageSrc: "",
    story: "",
    category: [],
    isPublished: 1,
    publishedBy: 0,
    isFeatured: 0,
    isTrending: 0,
    viewsCount: 0,
    sharedCount: 0,
    createdDate: new Date(),
    updatedDate: new Date(),
    publishedDate: new Date()
  }
};

const AddBlogReducer = (state = initialState, {type, data}) => {
  switch (type) {
    case UPDATE_FORM_DATA:
      return Object.assign({}, state, {
        formData: { ...state.formData, ...data }
      });
    case ADDING_BLOG:
      return {...state, isAdding : true};
    case ADD_BLOG_SUCCESS:
      return {...state, isAdding : false, error:null, formData : initialState.formData};
    case ADD_BLOG_ERROR:
      return {...state, isAdding : false, error : data};
    default:
      return state;
  }
};

export default AddBlogReducer;
