import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { EditorState as TEditorState } from "draft-js";
import { EditorState } from "draft-js";
import { convertContentToEditorState } from "src/utils/helper";

export type TPlansAndCompanies = {
    id: number;
    name: string;
    code: string;
    short_name: string;
    custom_1: any;
    custom_2: any;
    custom_3: any;
    custom_4: any;
    created_on: string;
    modified_on: string;
    is_active: boolean;
    master_type: number;
    created_by: number;
    modified_by: any;
};

export type TAuthInitialState = {
    showingSpinner: boolean;
    editorState: TEditorState;
    plans: TMenuItem[];
    companies: TMenuItem[];
};

const initialState: TAuthInitialState = {
    editorState: EditorState.createEmpty(),
    showingSpinner: false,
    companies: [],
    plans: [],
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setEditorStateFromStringContent(
            state,
            action: PayloadAction<string | undefined>,
        ) {
            state.editorState = convertContentToEditorState(action.payload);
        },
        setEditorStateOnChange(state, action: PayloadAction<TEditorState>) {
            state.editorState = action.payload;
        },
        setEditorStateToInitialState(state) {
            state.editorState = EditorState.createEmpty();
        },
        setSpinner(state, action: PayloadAction<boolean>) {
            state.showingSpinner = action.payload;
        },
        setCompanies(state, action: PayloadAction<TMenuItem[]>) {
            state.companies = action.payload;
        },
        setPlans(state, action: PayloadAction<TMenuItem[]>) {
            state.plans = action.payload;
        },
    },
});

export const {
    setEditorStateOnChange,
    setEditorStateFromStringContent,
    setEditorStateToInitialState,
    setSpinner,
    setCompanies,
    setPlans,
} = uiSlice.actions;

export default uiSlice.reducer;
