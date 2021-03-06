import { all } from 'redux-saga/effects';
import app from './app/appSaga';
import login from './app/routes/login/loginSaga';
import blogs from './app/routes/blogs/blogsSaga';
import categories from './app/routes/categories/categoriesSaga';
import addBlogSaga from './app/routes/addblog/addBlogSaga';
import taggingSaga from './app/routes/tagging/taggingSaga';
import blogSaga from './app/routes/blog/blogSaga';

export default function* rootSaga() {
  yield all([
    app(),
    login(),
    blogs(),
    categories(),
    addBlogSaga(),
    taggingSaga(),
    blogSaga(),
  ]);
}
