import { Button } from "@components/common/atoms/button";
import { Label } from "@components/common/atoms/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { PlaygroundInput } from "../playground-input";
import { PlaygroundInputLabel } from "../playground-input-label";
import { PlaygroundOutputLength } from "../playground-output-length";
import { PlaygroundTextarea } from "../playground-textarea";
import { TComposeFromPlayground } from "@redux/api/playgroundApi";
import { useEffect } from "react";

type Props = {
    onClickSubmitButton: (values: TComposeFromPlayground) => void
    contentAlreadyGenerated: string
}

const PlaygroundSidebar = ({ onClickSubmitButton, contentAlreadyGenerated = "" }: Props) => {
    const {
        register,
        formState: { errors, isValid, isDirty },
        handleSubmit,
        setValue,
        watch,
        reset,
        getValues,
    } = useForm<TComposeFromPlayground>({
        mode: "onChange",
        defaultValues: {
            output_length: "low",
            content: contentAlreadyGenerated,
        },
    });

    useEffect(() => {
        /*
        * keep the old state but take the last 500
        * chars from content that was already generated and send it in API
        *  response
        * */
        reset({
            ...getValues(),
            content: contentAlreadyGenerated.slice(-500),
        });
    }, [contentAlreadyGenerated]);

    const onClickCompose: SubmitHandler<TComposeFromPlayground> = (values) =>
        onClickSubmitButton(values);

    const getCommonFormValues = (
        name: keyof TComposeFromPlayground,
        type: "inputProps" | "textareaProps" = "inputProps",
    ) => {
        return {
            [type]: {
                ...register(name, {
                    maxLength: {
                        message: "Max length: 150 words",
                        value: 150,
                    },
                }),
            },
            errorMessage: errors[name]?.message,
        };
    };

    return (
        <aside
            className="w-[340px] bg-mGray-12 p-[38px] min-h-[calc(100vh-60px)] h-[calc(100vh-60px)] fixed left-0 top-[60px] overflow-y-scroll">
            <div className="flex flex-col space-y-[25px]">
                <PlaygroundInput
                    label={ <PlaygroundInputLabel label="Title"/> }
                    { ...getCommonFormValues("title") }
                />

                <PlaygroundTextarea
                    label={
                        <PlaygroundInputLabel
                            label={ "Content description/brief" }
                        />
                    }
                    { ...getCommonFormValues("description", "textareaProps") }
                />

                <PlaygroundInput
                    label={ <PlaygroundInputLabel label={ "Audience" }/> }
                    { ...getCommonFormValues("audience") }
                />

                <PlaygroundInput
                    label={ <PlaygroundInputLabel label={ "Tone of voice" }/> }
                    { ...getCommonFormValues("tone") }
                />

                <PlaygroundTextarea
                    label={ <PlaygroundInputLabel label={ "Keywords" }/> }
                    { ...getCommonFormValues("keywords", "textareaProps") }
                />
            </div>
            <div className="mb-[55px]">
                <Label
                    label={ "Output lengths" }
                    labelProps={ {
                        className: "text-mBlack-0",
                    } }
                />
                <div className="flex space-x-[10px] items-center">
                    <PlaygroundOutputLength
                        length="S"
                        isSelected={ watch("output_length") === "low" }
                        onClick={ () => {
                            setValue("output_length", "low");
                        } }

                    />
                    <PlaygroundOutputLength
                        length="M"
                        isSelected={ watch("output_length") === "medium" }
                        onClick={ () => {
                            setValue("output_length", "medium");
                        } }
                    />
                    <PlaygroundOutputLength
                        length="L"
                        isSelected={ watch("output_length") === "high" }
                        onClick={ () => {
                            setValue("output_length", "high");
                        } }
                    />
                </div>
            </div>
            <Button
                fullWidth
                size="lg"
                onClick={ handleSubmit(onClickCompose) }
                disabled={ isDirty && !isValid }
            >
                Compose
            </Button>
        </aside>
    );
};
export default PlaygroundSidebar;
