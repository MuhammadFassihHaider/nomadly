import { Editor } from "@components/common/organisms/editor";
import { PlaygroundHeader } from "@components/pages/playground/playground-header";
import { PlaygroundSidebar } from "@components/pages/playground/playground-sidebar";
import { useComposeFromPlaygroundMutation } from "@redux/api/playgroundApi/playgroundApi";
import { TComposeFromPlayground } from "@redux/api/playgroundApi";
import { useEffect, useState } from "react";
import { useEditorState } from "../../src/hooks/useEditorState";
import { EditorState } from "react-draft-wysiwyg";
import { getEditorStateInPlainText } from "../../src/utils/helper";

const Playground = () => {
    const [dataFromApi, setDataFromApi] = useState("");

    const {
        editorState,
        _setEditorStateOnChange,
        _setEditorStateFromString,
    } = useEditorState("");

    const [
        composeForPlayground,
        { data: dataComposeForPlayground, isLoading: isLoadingComposeForPlayground },
    ] = useComposeFromPlaygroundMutation();

    useEffect(() => {
        if (!isLoadingComposeForPlayground && !!dataComposeForPlayground) {
            const dataFromApiInString = `${ dataFromApi } ${ dataComposeForPlayground }`;
            setDataFromApi(dataFromApiInString);
            _setEditorStateFromString(dataFromApiInString);
        }
    }, [isLoadingComposeForPlayground]);

    const onClickSubmitButton = (values: TComposeFromPlayground) => {
        composeForPlayground(values);
    };

    const onChangeEditor = (editorState: EditorState) => {
        _setEditorStateOnChange(editorState);
        setDataFromApi(getEditorStateInPlainText(editorState));
    };

    return (
        <div>
            <PlaygroundHeader/>
            <div className="flex">
                <PlaygroundSidebar
                    onClickSubmitButton={ onClickSubmitButton }
                    contentAlreadyGenerated={ dataFromApi }/>
                <main className="flex-1 ml-[340px] mt-[60px]">
                    <Editor
                        editorState={ editorState }
                        onChangeEditorState={ onChangeEditor }/>
                </main>
            </div>
        </div>
    );
};

export default Playground;
