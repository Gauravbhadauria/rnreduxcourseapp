import {all} from 'redux-saga/effects';
import {watchUserSaga} from './userSaga';

const rootSaga = function* () {
  yield all([watchUserSaga()]);
};

export default rootSaga;
