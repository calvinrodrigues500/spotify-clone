import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { deezerApi } from "./services/deezer";

export const store = configureStore({
    reducer: {
        [deezerApi.reducerPath]: deezerApi.reducer,
        // player: playerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deezerApi.middleware)
})