import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { KeyboardEvent } from "react";
import { ENTER } from "./constants";

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

export const removeEmptyKeyValuePairs = (body: object) => {
    return Object.fromEntries(Object.entries(body).filter(([_, v]) => v != ""));
};

export const onPressEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    callBack: Function,
) => {
    if (e.key === ENTER) {
        callBack();
    }
};

export const getCookie = (cookie: string, name: string) => {
    var nameEQ = name + "=";
    var ca = cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value};`;
};

export const removeCookie = (name: string) => {
    document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
