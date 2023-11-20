import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import categoriesReducer from './reducers/categories.reducer';
import donationReducer from './reducers/donation.reducer';

const rootReducer = combineReducers({
  User: userReducer,
  Categories: categoriesReducer,
  Donation: donationReducer,
});
const config = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(config, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistor = persistStore(store);
