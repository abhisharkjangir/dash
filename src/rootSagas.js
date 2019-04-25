import { all } from 'redux-saga/effects';

import blogs from './app/routes/blogs/blogsSaga';

export default function* rootSaga() {
  yield all([blogs()]);
}
