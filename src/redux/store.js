import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
  reducer: persistedReducer

})
export let persistor = persistStore(store);