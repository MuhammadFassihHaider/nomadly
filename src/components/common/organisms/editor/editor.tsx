import { EditorState } from "draft-js";
import { useEditorState } from "src/hooks/useEditorState";
import dynamic from "next/dynamic";
const WYSIWYGEditor: any = dynamic(
    () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
    { ssr: false },
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props = {
    content?: string;
};

const Editor = ({ content = "" }: Props) => {
    const [editorState, setEditorStateOnChange] = useEditorState(content);

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorStateOnChange(editorState);
    };

    if (typeof window === "undefined") {
        return null; //return nothing on the server-side
    }

    return (
        <div>
            <WYSIWYGEditor
                editorState={editorState}
                wrapperClassName="min-h-[calc(100vh-60px)] shadow-sm h-full bg-white border-none"
                editorClassName="px-4"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
};

export default Editor;
