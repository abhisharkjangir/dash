import { connect } from 'react-redux';
import Blogs from './blogs';
import { fetchBlogs, fetchBlogsSuccess, fetchBlogsError } from '../blogs/blogsActions';

const mapStateToProps = (state) => ({...state.blogs});

const mapDispatchToProps = (dispatch) => ({
  fetchBlogs : () => dispatch(fetchBlogs()),
  fetchBlogsSuccess : (data) => dispatch(fetchBlogsSuccess(data)),
  fetchBlogsError : () => dispatch(fetchBlogsError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
