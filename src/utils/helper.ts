import { ContentState, convertFromHTML, EditorState } from "draft-js";

export function classNames(...args: any) {
    const classes = [];
    const hasOwn = {}.hasOwnProperty;

    for (let i = 0; i < arguments.length; i++) {
        const arg = args[i];
        if (!arg) continue;

        const argType = typeof arg;

        if (argType === "string" || argType === "number") {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            if (arg.length) {
                // eslint-disable-next-line prefer-spread
                const inner: any = classNames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
        } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
                for (const key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            } else {
                classes.push(arg.toString());
            }
        }
    }

    return classes.join(" ");
}

export function createNnumberOfArray(lengthOfArray: number) {
    return Array(lengthOfArray)
        .fill("")
        .map((_, i) => i + 1);
}

export const convertContentToEditorState = (content?: string) => {
    if (!content) return EditorState.createEmpty();

    const blocksFromHTML = convertFromHTML(content.split("\n").join("<br />"));

    const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    return EditorState.createWithContent(contentState);
};

export const getEditorStateInPlainText = (editorState: EditorState) => {
    return editorState.getCurrentContent().getPlainText();
};
