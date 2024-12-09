import {combineReducers, configureStore} from '@reduxjs/toolkit';

import UserReducer from '../slice/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import OnlineUserReducer from '../slice/OnlineUserSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import SagaReducer from '../saga/userSlice';
import {userApi} from '../slice/RtkSlice';
const rootReducer = combineReducers({
  // users: UserReducer,
  // onlineUsers: OnlineUserReducer,
  // sagaUsers: SagaReducer,
  [userApi.reducerPath]: userApi.reducer,
});
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const mystore = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({serializableCheck: false, thunk: false}).concat(
  //     sagaMiddleware,
  //   ),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(userApi.middleware),
});

//sagaMiddleware.run(rootSaga);
const persistedStore = persistStore(mystore);

export {mystore, persistedStore};

//persistedReducer===> persistReducer(root reducer,config)
//perssitedStore==> persistStore(mystore)
