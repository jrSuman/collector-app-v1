import { combineReducers } from 'redux';
import profileSlice from './slices/profileSlice';

const rootReducer = combineReducers({
  profileSlice,
  // storeAuthToken: storeAuthToken,
  // logout: logout,
  // storeUserData,
  // logout
})

export default rootReducer