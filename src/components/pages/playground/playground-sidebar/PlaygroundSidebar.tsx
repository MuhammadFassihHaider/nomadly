import { Button } from "@components/common/atoms/button";
import { Label } from "@components/common/atoms/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { PlaygroundInput } from "../playground-input";
import { PlaygroundInputLabel } from "../playground-input-label";
import { PlaygroundOutputLength } from "../playground-output-length";
import { PlaygroundTextarea } from "../playground-textarea";

type TComposeForm = {
    title: string;
    description: string;
    audience: string;
    tone: string;
    keywords: string;
};

const PlaygroundSidebar = () => {
    const {
        register,
        formState: { errors, isValid, isDirty },
        handleSubmit,
    } = useForm<TComposeForm>({
        mode: "onChange",
    });

    const onClickCompose: SubmitHandler<TComposeForm> = (values) => {
        console.log({ values, errors });
    };

    const getCommonFormValues = (
        name: keyof TComposeForm,
        type: "inputProps" | "textareaProps" = "inputProps",
    ) => {
        return {
            [type]: {
                ...register(name, {
                    maxLength: {
                        message: "Max length: 150 words",
                        value: 4,
                    },
                }),
            },
            errorMessage: errors[name]?.message,
        };
    };

    return (
        <aside className="w-[340px] bg-mGray-12 p-[38px] min-h-[calc(100vh-60px)] h-[calc(100vh-60px)] fixed left-0 top-[60px] overflow-y-scroll">
            <div className="flex flex-col space-y-[25px]">
                <PlaygroundInput
                    label={<PlaygroundInputLabel label="Title" />}
                    {...getCommonFormValues("title")}
                />

                <PlaygroundTextarea
                    label={
                        <PlaygroundInputLabel
                            label={"Content description/brief"}
                        />
                    }
                    {...getCommonFormValues("description", "textareaProps")}
                />

                <PlaygroundInput
                    label={<PlaygroundInputLabel label={"Audience"} />}
                    {...getCommonFormValues("audience")}
                />

                <PlaygroundInput
                    label={<PlaygroundInputLabel label={"Tone of voice"} />}
                    {...getCommonFormValues("tone")}
                />

                <PlaygroundTextarea
                    label={<PlaygroundInputLabel label={"Keywords"} />}
                    {...getCommonFormValues("keywords", "textareaProps")}
                />
            </div>
            <div className="mb-[55px]">
                <Label
                    label={"Output lengths"}
                    labelProps={{
                        className: "text-mBlack-0",
                    }}
                />
                <div className="flex space-x-[10px] items-center">
                    <PlaygroundOutputLength isSelected length="S" />
                    <PlaygroundOutputLength length="M" />
                    <PlaygroundOutputLength length="L" />
                </div>
            </div>
            <Button
                fullWidth
                size="lg"
                onClick={handleSubmit(onClickCompose)}
                disabled={isDirty && !isValid}
            >
                Compose
            </Button>
        </aside>
    );
};
export default PlaygroundSidebar;
