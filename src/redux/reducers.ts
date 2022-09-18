import { combineReducers } from "redux";
import { api } from "./api";
import ui from "@redux/slices/ui-slice";

const rootReducer = combineReducers({ ui, [api.reducerPath]: api.reducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
