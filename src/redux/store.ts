import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { apiGeneral, apiModels } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { ignoredPaths: ["ui.editorState"] },
            serializableCheck: { ignoredPaths: ["ui.editorState"] },
        })
            .concat(apiModels.middleware)
            .concat(apiGeneral.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);

export default store;
