import { EditorState } from "draft-js";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
    setEditorStateFromStringContent,
    setEditorStateOnChange,
} from "../redux/slices/ui-slice";

export const useEditorState = (
    content?: string,
): [EditorState, (editorState: EditorState) => void] => {
    const dispatch = useAppDispatch();

    const editorState = useAppSelector((state) => state.ui.editorState);

    const _setEditorStateFromString = useCallback(
        (content?: string) => {
            dispatch(setEditorStateFromStringContent(content));
        },
        [dispatch],
    );

    const _setEditorStateOnChange = useCallback(
        (editorState: EditorState) => {
            dispatch(setEditorStateOnChange(editorState));
        },
        [dispatch],
    );

    useEffect(() => {
        _setEditorStateFromString(content);
    }, [_setEditorStateFromString, content]);

    return [editorState, _setEditorStateOnChange];
};
