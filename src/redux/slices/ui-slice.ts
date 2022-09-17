import { EditorState } from "draft-js";
import type { EditorState as TEditorState } from "draft-js";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertContentToEditorState } from "src/utils/helper";

export type TAuthInitialState = {
    editorState: TEditorState;
};

const initialState: TAuthInitialState = {
    editorState: EditorState.createEmpty(),
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
    },
});

export const {
    setEditorStateOnChange,
    setEditorStateFromStringContent,
    setEditorStateToInitialState,
} = uiSlice.actions;

export default uiSlice.reducer;
