import {createSlice} from '@reduxjs/toolkit';

const UserSagaSlice = createSlice({
  name: 'userSaga',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsers: state => {
      state.loading = true;
    },
    fetchUsersSuccessfully: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchUsers, fetchUsersSuccessfully, fetchUsersFailed} =
  UserSagaSlice.actions;
export default UserSagaSlice.reducer;
