import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchUsersFailed,
  fetchUsersSuccessfully,
  fetchUsers,
} from './userSlice';

const fetchUserSaga = function* () {
  try {
    const response = yield call(() =>
      fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        if (!response.ok) {
          throw new Error('response was not ok');
        }
        return response.json();
      }),
    );
    yield put(fetchUsersSuccessfully(response));
  } catch (error) {
    yield put(fetchUsersFailed(error.message));
  }
};

export const watchUserSaga = function* () {
  yield takeLatest(fetchUsers.type, fetchUserSaga);
};
