import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { presentationSlice } from "@/entities/presentation/model/slice";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [presentationSlice.name],
};

export function makeStore() {
  const store = configureStore({
    // reducer: persistReducer(
    //   persistConfig, 
    //   rootReducer,
    // ) as unknown as typeof rootReducer,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  setupListeners(store.dispatch);

  return store;
}

export const appStore = makeStore();
export const persistedStore = persistStore(appStore); 

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
