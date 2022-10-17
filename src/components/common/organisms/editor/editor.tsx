import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WYSIWYGEditor: any = dynamic(
    // @ts-ignore
    () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
    { ssr: false },
);

const EditorOptions = {
    options: ["blockType", "fontSize", "inline", "link", "textAlign", "list"],
    inline: {
        inDropdown: false,
        options: ["italic", "bold", "underline", "strikethrough"],
        bold: { className: undefined },
        italic: { className: undefined },
        underline: { className: undefined },
        strikethrough: { className: undefined },
    },
    blockType: {
        inDropdown: true,
        options: [
            "Normal",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "Blockquote",
            "Code",
        ],
    },
    fontSize: {
        options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    },
    fontFamily: {
        options: [
            "Arial",
            "Georgia",
            "Impact",
            "Tahoma",
            "Times New Roman",
            "Verdana",
        ],
    },
    link: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        dropdownClassName: undefined,
        showOpenOptionOnHover: true,
        defaultTargetOption: "_self",
        options: ["link", "unlink"],
        link: { className: undefined },
        unlink: { className: undefined },
        linkCallback: undefined,
    },
    list: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["unordered"],
        unordered: { className: undefined },
        ordered: { className: undefined },
        indent: { className: undefined },
        outdent: { className: undefined },
    },
    textAlign: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["left", "center", "right", "justify"],
        left: { className: undefined },
        center: { className: undefined },
        right: { className: undefined },
        justify: { className: undefined },
    },
};

type Props = {
    onChangeEditorState: (editorState: EditorState) => void;
    editorState: EditorState;
};

const Editor = ({ editorState, onChangeEditorState }: Props) => {
    if (typeof window === "undefined") {
        //return nothing on the server-side
        //needed for Next.js
        return null;
    }

    return (
        <div>
            {/* @ts-ignore */}
            <WYSIWYGEditor
                editorState={editorState}
                wrapperClassName="min-h-[calc(100vh-60px)] shadow-sm h-full bg-white border-none"
                editorClassName="px-4 min-h-[calc(100vh-60px)] cursor-text bg-[#F6F6F6] rounded-md px-[34px] py-[12px] mx-[38px] my-[30px] text-sm leading-[28px] text-mBlack-0"
                toolbar={EditorOptions}
                onEditorStateChange={onChangeEditorState}
            />
        </div>
    );
};

export default Editor;
