import { all } from 'redux-saga/effects';

import blogs from './app/routes/blogs/blogsSaga';
import login from './app/routes/login/loginSaga';

export default function* rootSaga() {
  yield all([
    blogs(),
    login()
  ]);
}
