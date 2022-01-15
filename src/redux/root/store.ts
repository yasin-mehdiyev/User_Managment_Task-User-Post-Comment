import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from "redux-persist";
import { persistedReducer } from "./rootReducer";

const store : any = configureStore({
    reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;