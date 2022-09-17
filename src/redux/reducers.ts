import { combineReducers } from "redux";

import ui from "@redux/slices/ui-slice";

const rootReducer = combineReducers({ ui });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
