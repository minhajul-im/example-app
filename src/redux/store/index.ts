import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers, type Action } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import storage from "./storage";
import ModalReducer from "../slice/edit-modal-slice";

const appReducer = combineReducers({
  modal: ModalReducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: Action
) => {
  if (action.type === "RESET_STORE") state = undefined;
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["modal", "cart", "sample"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const syncConfig = {
  blacklist: [
    "persist/PURGE",
    "persist/PERSIST",
    "persist/REHYDRATE",
    "persist/REGISTER",
    "persist/FLUSH",
    "persist/PAUSE",
  ],
};

const isClient = typeof window !== "undefined";

export const makeStore = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const middleware = (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PURGE",
          "persist/PERSIST",
          "persist/REHYDRATE",
        ],
      },
    }).concat(isClient ? createStateSyncMiddleware(syncConfig) : []);
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
  });
  if (isClient) {
    initMessageListener(store);
  }
  return store;
};

export const store = makeStore();
export const persistor = persistStore(store);
export default makeStore;

export type RootStateType = ReturnType<typeof store.getState>;
