import { EditorState as TEditorState, EditorState } from "draft-js";
import { useEffect, useState } from "react";
import { convertContentToEditorState } from "../utils/helper";

export const useEditorState = (
    content?: string,
): {
    editorState: EditorState,
    _setEditorStateOnChange: (editorState: EditorState) => void,
    _setEditorStateFromString: (content: string) => void
} => {
    const [editorState, setEditorState] = useState<TEditorState>(EditorState.createEmpty());

    const _setEditorStateFromString =
        (content?: string) => {
            setEditorState(convertContentToEditorState(content));
        };

    const _setEditorStateOnChange =
        (editorState: EditorState) => {
            setEditorState(editorState);
        };

    useEffect(() => {
        _setEditorStateFromString(content);
    }, [content]);

    return { editorState, _setEditorStateOnChange, _setEditorStateFromString };
};
