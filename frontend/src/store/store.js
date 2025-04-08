import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import storeReducer from "../slice/projectSlice";
const persistConfig = {
  key: "rootStore",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  store: storeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
