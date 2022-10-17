import { combineReducers } from "redux";
import { apiGeneral, apiModels } from "./api";
import ui from "@redux/slices/ui-slice";
import signup from "@redux/slices/signup-slice";
import business from "@redux/slices/business-slice";

const rootReducer = combineReducers({
    ui,
    signup,
    business,
    [apiModels.reducerPath]: apiModels.reducer,
    [apiGeneral.reducerPath]: apiGeneral.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
