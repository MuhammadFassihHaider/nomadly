import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WYSIWYGEditor: any = dynamic(
    () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
    { ssr: false },
);

type Props = {
    onChangeEditorState: (editorState: EditorState) => void
    editorState: EditorState
};

const Editor = ({ editorState, onChangeEditorState }: Props) => {
    if (typeof window === "undefined") {
        //return nothing on the server-side
        //needed for Next.js
        return null;
    }

    return (
        <div>
            <WYSIWYGEditor
                editorState={ editorState }
                wrapperClassName="min-h-[calc(100vh-60px)] shadow-sm h-full bg-white border-none"
                editorClassName="px-4"
                onEditorStateChange={ onChangeEditorState }
            />
        </div>
    );
};

export default Editor;
