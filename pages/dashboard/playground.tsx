import { Editor } from "@components/common/organisms/editor";
import { PlaygroundHeader } from "@components/pages/playground/playground-header";
import { PlaygroundSidebar } from "@components/pages/playground/playground-sidebar";
import { useComposeFromPlaygroundMutation } from "@redux/api/playgroundApi/playgroundApi";
import { TComposeFromPlayground } from "@redux/api/playgroundApi";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useEditorState } from "../../src/hooks/useEditorState";
import { EditorState } from "react-draft-wysiwyg";
import { getEditorStateInPlainText } from "../../src/utils/helper";
import { useForm } from "react-hook-form";
import { useKeyDown } from "src/hooks/useKeyDown";

const getContentBeforeCursor = (str: string, cursorPosition: number) => {
    const MAX_CONTENT_TO_GET = 500;
    const startIndex = Math.max(cursorPosition - MAX_CONTENT_TO_GET, 0);
    return str.substring(startIndex, cursorPosition);
};

const Playground = () => {
    const [dataFromApi, setDataFromApi] = useState("");

    const [
        composeForPlayground,
        {
            data: dataComposeForPlayground,
            isLoading: isLoadingComposeForPlayground,
        },
    ] = useComposeFromPlaygroundMutation();

    const { editorState, _setEditorStateOnChange, _setEditorStateFromString } =
        useEditorState("");

    const cursorPosition = useMemo(
        () => editorState.getSelection().getAnchorOffset(),
        [editorState.getSelection().getAnchorOffset()],
    );

    const {
        register,
        formState,
        handleSubmit,
        setValue,
        watch,
        reset,
        getValues,
    } = useForm<TComposeFromPlayground>({
        mode: "onChange",
        defaultValues: {
            output_length: "low",
            content: dataFromApi,
        },
    });

    const onClickSubmitButton = () => {
        const relevantContent = getContentBeforeCursor(
            getValues("content"),
            cursorPosition,
        );

        composeForPlayground({ ...getValues(), content: relevantContent });
    };

    const getDataMemo = useCallback(onClickSubmitButton, [
        getValues(),
        cursorPosition,
    ]);

    useKeyDown(getDataMemo);

    useEffect(() => {
        if (!isLoadingComposeForPlayground && !!dataComposeForPlayground) {
            const dataFromApiInString = `${dataFromApi} ${dataComposeForPlayground}`;
            setDataFromApi(dataFromApiInString);
            _setEditorStateFromString(dataFromApiInString);
        }
    }, [isLoadingComposeForPlayground]);

    const onChangeEditor = (editorState: EditorState) => {
        _setEditorStateOnChange(editorState);
        setDataFromApi(getEditorStateInPlainText(editorState));
    };

    return (
        <div>
            <PlaygroundHeader />
            <div className="flex">
                <PlaygroundSidebar
                    onClickSubmitButton={() => onClickSubmitButton()}
                    contentAlreadyGenerated={dataFromApi}
                    formState={formState}
                    getValues={getValues}
                    handleSubmit={handleSubmit}
                    register={register}
                    reset={reset}
                    setValue={setValue}
                    watch={watch}
                />
                <main className="flex-1 ml-[340px] mt-[60px]">
                    <Editor
                        editorState={editorState}
                        onChangeEditorState={onChangeEditor}
                    />
                </main>
            </div>
        </div>
    );
};

export default Playground;
