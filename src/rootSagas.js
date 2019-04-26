import { all } from 'redux-saga/effects';
import app from './app/appSaga';
import login from './app/routes/login/loginSaga';
import blogs from './app/routes/blogs/blogsSaga';


export default function* rootSaga() {
  yield all([
    app(),
    login(),
    blogs(),
  ]);
}
